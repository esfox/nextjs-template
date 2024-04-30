import { PrimeReactProvider } from 'primereact/api';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './main.css';
import 'primereact/resources/themes/lara-light-green/theme.css';

export default function({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <PrimeReactProvider>
        <body>{children}</body>
      </PrimeReactProvider>
    </html>
  );
}
