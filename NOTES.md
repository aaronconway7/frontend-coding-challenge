# Notes 🗒️ 

(sorry if this is a bit of a brain dump, I kind of just wrote was I was thinking as I was going along!)

## Part 1
- Using Vuex throughout to manage the survey state so I could easily access the survey results and other state througout. I did see conflicting things about whether using mutations outisde of actions is good or not but I decided to stick with mutations in this scenario as for the particular use cases I didn't find the need to make any of them asynchronous.
- I did initally use the `key` to define the value for both the goals and diet check buttons as this is a pattern I'm more familiar with rather than using the display text but ended up changing this to use the display text so it'd print nicely on the success page.
- When tracking the `currentStep` for the progress bar, I decieded to set this in the `created` lifecycle hook rather than incrementing on next/back button clicks as this would allow the progress bar to work regardless of how the user ended up there (e.g. on page refresh or if you wanted to allow the user to "jump" back or forward to particular questions)
- As the API endpoint doesn't actually exist, I thought it would be nice to make an error component. Reading your [blog](https://medium.com/thriva/thrivas-front-end-d0d0d953959) and specifically the code structure (how your connectors are responsible for connecting to the vuex store and functional components are there to take in data and display it) and looking at the exisitng code, I decided to replicate how the `SurveyProgress`/`ProgressBar` combined so `SurveyError` gets the error from the store and `ErrorMessage` displays it. This would also allow `ErrorMessage` to be easily used elsewhere in the app. I did initially render higher up in the tree it so it appeared on every question but thought this could potentially be confusing for the reader if they fix the error and still see it so I only render it on the final question and clear it when the user returns.
- Made the disabled buttons a bit more obvious that they were disabled and changed "Next" button on final stage to say "Submit"

## Part 2
- Made a `SuccessCard` component passing in the answers as props
- Again reading your blog and looking at the existing code I looked to use Foundation XY Grid and the BEM methodology for my styling
- Defined an answers array to just loop through the values and avoid repeating the markup such as the `div` elements creating the gaps inbetween.
- From your blog, you use `Moment` for handling date and times, which I could have used to format the date but just went with `.toLocaleDateString()` to save importing it just for that bit.
- Hid the progress bar, reduced the # of columns the content consumed on medium+ screens and made the `p` tag under the title smaller to match the design
- The colours on the 1st page of the pdf don't totally match up with those on the 2nd so I took the exact valus given on the 2nd page where necessary and used the same colours from the survey screens for the text above the card

## Part 3
- Defined `checkButton` to reduce repeating code
- Tried mocking `router` as I wanted to test that the `router.push()` function was called with `/success` but had no luck. I left the code commented (it actually passes if I make that test `it.only` 😕)

## Further Work 🕑
- Persist state on page refresh
- Store the array of stages elsewhere and able to reference in other files to easily change the order if we wished
- Loading state when hitting the API
- Redirecting user away if they try going to particular routes manually via the URL

***

👋 - Really cool task! Definately one of the more interesting coding tasks I've been given. I've bee wanting to try Vue for a while and this gave but this was my first proper go at it and enjoyed the experience! Thanks! Aaron.