import React from 'react'
import { Helmet } from 'react-helmet'

import Button from './button'
import Input from './input'
import P from './p'
import RequiresCookieConsent from './requires-cookie-consent'

export default ({
  cta,
  svForm,
  sourceUrl,
  uid,
}) => (
  <RequiresCookieConsent
    target="form"
  >
    <Helmet>
      <script
        src="https://f.convertkit.com/ckjs/ck.5.js"
      />
    </Helmet>

    <div>
      <form
        action={`https://app.convertkit.com/forms/${svForm}/subscriptions`}
        className="convertkit-form__form"
        method="post"
        data-sv-form={svForm}
        data-uid={uid}
        data-format="inline"
        data-version="5"
        data-options="{&quot;settings&quot;:{&quot;after_subscribe&quot;:{&quot;action&quot;:&quot;message&quot;,&quot;redirect_url&quot;:&quot;&quot;,&quot;success_message&quot;:&quot;Check your email to confirm your subscription.&quot;},&quot;modal&quot;:{&quot;trigger&quot;:null,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:null,&quot;devices&quot;:null,&quot;show_once_every&quot;:null},&quot;recaptcha&quot;:{&quot;enabled&quot;:false},&quot;return_visitor&quot;:{&quot;action&quot;:&quot;show&quot;,&quot;custom_content&quot;:&quot;&quot;},&quot;slide_in&quot;:{&quot;display_in&quot;:null,&quot;trigger&quot;:null,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:null,&quot;devices&quot;:null,&quot;show_once_every&quot;:null}}}"
        min-width="400 500 600 700 800"
      >
        <ul
          className={`
            convertkit-form__alert
            convertkit-form__alert--error
          `}
          data-element="errors"
          data-group="alert"
        />

        <div
          className="convertkit-form__fields"
        >
          <Input
            className={`
              border-right-width-0
              flex-basis
              flex-grow
              rounded-0
              rounded-l-3
            `}
            name="email_address"
            placeholder="Enter your email"
            required
            type="email"
          />

          <input
            name="fields[source]"
            required
            type="hidden"
            value={sourceUrl}
          />

          <Button
            category="primary"
            className={`
              rounded-0
              rounded-r-3
            `}
            data-element="submit"
          >
            {cta || 'Get me early access!'}
          </Button>
        </div>
      </form>

      <P
        className={`
          color-gray-600
          font-size-14-medium
          italic
          m-0
        `}
      >
        I respect your email privacy. Unsubscribe anytime.
      </P>
    </div>
  </RequiresCookieConsent>
)
