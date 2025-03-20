"use client";

export default function SimpleIframe() {
  return (
    <div className="w-full min-h-[600px] border rounded-lg overflow-hidden">
      <iframe
        src="https://trends.google.com/trends/explore?date=all&geo=SA&q=%D8%A7%D8%A8%D9%88%20%D9%85%D9%84%D9%88%D8%AD&hl=en"
        width="100%"
        height="600"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen
      />
    </div>
  );
}
