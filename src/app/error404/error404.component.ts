import { Component } from '@angular/core';

@Component({
  template: `
    <body>
      <div class="utility-page-wrap">
        <div class="utility-page-content">
          <img
            alt=""
            src="https://d3e54v103j8qbb.cloudfront.net/static/page-not-found.211a85e40c.svg"
          />
          <h2>Page Not Found</h2>
          <div>
            The page you are looking for doesn&#x27;t exist or has been moved
          </div>
        </div>
      </div>
    </body>
  `,
})
export class Error404Component {}
