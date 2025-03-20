"use client";

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SimpleIframe() {
  const [data, setData] = useState([]);
  const [timeRange, setTimeRange] = useState("all");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/csv/searchdata.csv");
      const text = await response.text();

      // Parse CSV data
      const rows = text
        .split("\n")
        .slice(2) // Skip header rows
        .filter((row) => row.trim()) // Remove empty rows
        .map((row) => {
          const [date, value] = row.split(",");
          return {
            date: date,
            value: value === "<1" ? 0 : parseInt(value, 10),
          };
        })
        .sort((a, b) => new Date(a.date) - new Date(b.date)); // Ensure chronological order

      setData(rows);
    };

    fetchData();
  }, []);

  const filteredData = data.filter((item) => {
    if (timeRange === "all") return true;

    const date = new Date(item.date);
    const now = new Date("2024-03"); // Use March 2024 as reference point since that's our latest data
    let monthsToSubtract = 12;

    if (timeRange === "5y") monthsToSubtract = 60;
    if (timeRange === "1y") monthsToSubtract = 12;

    const startDate = new Date(now);
    startDate.setMonth(now.getMonth() - monthsToSubtract);
    return date >= startDate;
  });

  const chartConfig = {
    value: {
      label: "Search Interest",
      color: "hsl(var(--primary))",
    },
  };

  // Add annotations for key events
  const annotations = [
    { date: "2006-01", label: "First CD Release" },
    { date: "2014-07", label: "TV Adaptation" },
    { date: "2016-06", label: "Cultural Revival" },
  ];

  return (
    <Card className="border-2">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle className="text-2xl">
            Historical Search Interest Trends
          </CardTitle>
          <CardDescription className="text-base">
            Temporal analysis of "ابو ملوح" search patterns in Saudi Arabia
            (2004-2024)
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto"
            aria-label="Select time range"
          >
            <SelectValue placeholder="All Time" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="all" className="rounded-lg">
              Full Timeline (2004-2024)
            </SelectItem>
            <SelectItem value="5y" className="rounded-lg">
              Last 5 Years
            </SelectItem>
            <SelectItem value="1y" className="rounded-lg">
              Last Year
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-6 sm:px-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-[2/1] w-full min-h-[500px]"
        >
          <AreaChart
            data={filteredData}
            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="fillValue" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="hsl(var(--primary))"
                  stopOpacity={0.2}
                />
                <stop
                  offset="95%"
                  stopColor="hsl(var(--primary))"
                  stopOpacity={0.05}
                />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="hsl(var(--muted-foreground))"
              opacity={0.2}
            />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={12}
              minTickGap={50}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                });
              }}
              style={{
                fontSize: "12px",
                fontFamily: "var(--font-sans)",
              }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => `${value}`}
              domain={[0, 100]}
              style={{
                fontSize: "12px",
                fontFamily: "var(--font-sans)",
              }}
            />
            <ChartTooltip
              cursor={{
                stroke: "hsl(var(--muted-foreground))",
                strokeWidth: 1,
                strokeDasharray: "4 4",
              }}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                    });
                  }}
                  formatter={(value) => [`${value}`, "Search Interest"]}
                />
              }
            />
            <Area
              dataKey="value"
              type="monotone"
              fill="url(#fillValue)"
              stroke="hsl(var(--primary))"
              strokeWidth={2}
              dot={false}
              activeDot={{
                r: 4,
                fill: "hsl(var(--primary))",
                stroke: "hsl(var(--background))",
                strokeWidth: 2,
              }}
            />
          </AreaChart>
        </ChartContainer>
        <div className="mt-4 text-sm text-muted-foreground text-center">
          Source: Google Trends Data (2004-2024) | Normalized search interest
          values (0-100)
        </div>
      </CardContent>
    </Card>
  );
}
