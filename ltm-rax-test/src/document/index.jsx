import { createElement } from 'rax';
import { Root, Style, Script, Data} from 'rax-document';

function Document() {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no,viewport-fit=cover" />
        <title>ltm-rax-test</title>
        <Style />
      </head>
      <body>
        {/* root container */}
        <Root />
        {/* initial data from server side */}
        <Data />
        <Script />
      </body>
    </html>
  );
}
export default Document;
