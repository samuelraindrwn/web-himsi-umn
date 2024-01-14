import "./global.css";
import NavigationHeader from "@/components/templates/header";

export const metadata = {
  title: { default: "HIMSI UMN", template: "HIMSI | %s" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/logo-ico.ico" type="image/x-icon" />
      </head>
      <body>
        <NavigationHeader />
        {children}
      </body>
    </html>
  );
}
