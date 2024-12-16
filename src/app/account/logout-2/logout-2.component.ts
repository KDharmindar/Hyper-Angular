import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { AccountWrapper2Component } from '@auth/account-wrapper2.component'

@Component({
  selector: 'app-logout-2',
  standalone: true,
  imports: [CommonModule, AccountWrapper2Component, RouterModule],
  template: `
    <app-account-wrapper2>
      <div class="my-auto">
        <!-- title-->
        <div class="text-center">
          <h4 class="mt-0">See You Again !</h4>
          <p class="text-muted mb-4">You are now successfully sign out.</p>
        </div>

        <!-- Logout icon -->
        <div class="logout-icon m-auto">
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 161.2 161.2"
            enable-background="new 0 0 161.2 161.2"
            xml:space="preserve"
          >
            <path
              class="path"
              fill="none"
              stroke="#0acf97"
              stroke-miterlimit="10"
              d="M425.9,52.1L425.9,52.1c-2.2-2.6-6-2.6-8.3-0.1l-42.7,46.2l-14.3-16.4
                                    c-2.3-2.7-6.2-2.7-8.6-0.1c-1.9,2.1-2,5.6-0.1,7.7l17.6,20.3c0.2,0.3,0.4,0.6,0.6,0.9c1.8,2,4.4,2.5,6.6,1.4c0.7-0.3,1.4-0.8,2-1.5
                                    c0.3-0.3,0.5-0.6,0.7-0.9l46.3-50.1C427.7,57.5,427.7,54.2,425.9,52.1z"
            />
            <circle
              class="path"
              fill="none"
              stroke="#0acf97"
              stroke-width="4"
              stroke-miterlimit="10"
              cx="80.6"
              cy="80.6"
              r="62.1"
            />
            <polyline
              class="path"
              fill="none"
              stroke="#0acf97"
              stroke-width="6"
              stroke-linecap="round"
              stroke-miterlimit="10"
              points="113,52.8
                                    74.1,108.4 48.2,86.4 "
            />

            <circle
              class="spin"
              fill="none"
              stroke="#0acf97"
              stroke-width="4"
              stroke-miterlimit="10"
              stroke-dasharray="12.2175,12.2175"
              cx="80.6"
              cy="80.6"
              r="73.9"
            />
          </svg>
        </div>
        <!-- end logout-icon-->
      </div>

      <ng-template #bottomLinks>
        <!-- Footer-->
        <footer class="footer footer-alt">
          <p class="text-muted">
            Back to
            <a routerLink="/pages-login-2" class="text-muted ms-1"
              ><b>Log In</b></a
            >
          </p>
        </footer>
      </ng-template>
    </app-account-wrapper2>
  `,
  styles: ``,
})
export class Logout2Component {}