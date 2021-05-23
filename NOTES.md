# Notes

## Part 1

1. Name
    - using getter and setter with computed value
2. Goals & Diet
    - Using key to define value (less likely to change than name)
    - Created a MAX_GOALS_ALLOWED constant so we could easily change 
    - added some extra styles to check-button--disabled to make it more obvious it was disabled
    - assumed they had to select at least 1
3. Date of Birth
    - some of the error messages are occasioanlly incorrect?
4. Survey Progress
    - set current step in created() rather than on incrementing on next/back click so still works on page refresh and if you ever want to be able access specific stages alternatively
    - would be good to store stages array elsewhere as a constant that could be referenced when setting current step to allow you to change the order of steps easily 
    - move next back buttons into it's own component?
5. API Call
    - changed "next" on final page to "submit"
    - clear after after event or x seconds
    - loading state
    - decided to make a SurveyError/ErrorMessage components mimicking SurveyProgress/ProgressBar to display error from API
    - reset survey state on success

- should I convert commiting mutations to dispatching actions?
- should I be interacting with vuex state on as user is anwering questions or onc

## Part 2

- Hiding progress bar on success page as it's not in design
    - hid it depending on route name in this case similar to intro in Survet.vue but could have also done it depending on currentStep
- Made a success card component
- Using Foundation XY Grid & BEM methodology
- reduced # of columns on medium+ screens the content would take up to match design
- reduced size of p tag but kept same colours
- defined answers array to easily loop through values, reduce repeated code
- used .toLocaleDateString() to format date in this instance for ease but could have used moment library like blog says you use

## Part 3

- defining checkButton as we re-use it a few times
- replicating existing class tests for the disabled prop
- isolation
- https://lmiller1990.github.io/vue-testing-handbook/v3/vuex-actions.html#testing-actions