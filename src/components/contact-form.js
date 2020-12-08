import React, { useState } from 'react'
import { useForm, ValidationError } from '@statickit/react'

import Checkbox from './checkbox'
import Flash from './flash'
import RequiresCookieConsent from './requires-cookie-consent'

export default () => {
  const [{
    errors,
    submitting,
    succeeded,
  }, handleSubmit] = useForm('contact')

  const [isDataProcessingConsentGiven, setIsDataProcessingConsentGiven] = useState(false)

  const toggleIsDataProcessingConsentGiven = () => {
    setIsDataProcessingConsentGiven(!isDataProcessingConsentGiven)
  }

  const hasErrors = errors.length > 0

  const canSubmit = isDataProcessingConsentGiven && !submitting

  return (
    <RequiresCookieConsent
      target="contact form"
    >
      {hasErrors && !submitting && (
        <Flash
          type="error"
        >
          Sorry, your message could not be sent. Try again after addressing the errors below.
        </Flash>
      )}

      {succeeded && (
        <Flash
          type="success"
        >
          Thank you for your message. I will get back to you soon.
        </Flash>
      )}

      <form
        onSubmit={handleSubmit}
      >
        <div
          className="mb-12"
        >
          <label
            htmlFor="email"
          >
            Email address
          </label>

          <div
            className={`
              s:col-8/12
              m:col-6/10
              l:col-5/8
              xl:col-4/8
            `}
          >
            <input
              id="email"
              name="email"
              placeholder="your.best@email.com"
              type="email"
            />
          </div>

          <ValidationError
            className={`
              block
              font-size-12-short
              font-weight-500
              italic
              my-6
              text-red-500
            `}
            errors={errors}
            field="email"
            prefix="Email address"
          />
        </div>

        <div
          className="mb-12"
        >
          <label
            htmlFor="message"
          >
            Message
          </label>

          <textarea
            id="message"
            name="message"
            placeholder="What do you want to say?"
            rows={6}
          />

          <ValidationError
            className={`
              block
              font-size-12-short
              font-weight-500
              italic
              my-6
              text-red-500
            `}
            errors={errors}
            field="message"
            prefix="Message"
          />
        </div>

        <div
          className={`
            mb-12
            flex
          `}
        >
          <div
            className="mr-2.5"
          >
            <Checkbox
              id="data-processing-consent"
              name="data-processing-consent"
              onChange={toggleIsDataProcessingConsentGiven}
              value={isDataProcessingConsentGiven}
            />
          </div>

          <label
            className={`
              cursor-pointer
              flex-shrink
            `}
            htmlFor="data-processing-consent"
          >
            I understand that the information provided by me is subject to the <a href="https://www.iubenda.com/privacy-policy/31487586" className="iubenda-nostyle no-brand iubenda-embed">Privacy Policy</a>.
          </label>
        </div>

        <button
          disabled={!canSubmit}
          type="submit"
        >
          Send your message
        </button>
      </form>
    </RequiresCookieConsent>
  )
}
