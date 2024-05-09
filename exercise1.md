As for the production line, we will take a ready-made, proven system from a large manufacturer, but not a JavaScript.
This is almost a ready answer to the first question: VS, .Net, and that's it, that's enough
let's add specifics and some alternatives:
  - linting: [.editorconfig](https://learn.microsoft.com/en-us/dotnet/fundamentals/code-analysis/code-style-rule-options), [.Net format](https://github.com/dotnet/), [Roslyn](https://learn.microsoft.com/en-us/visualstudio/code-quality/roslyn-analyzers-overview?view=vs-2019), [Stylecop] (https://github.com/DotNetAnalyzers/StyleCopAnalyzers)
  - testing: .NetCLi, xUnit, NUnit, MSTest   // SpecFlow & Selenium (behavior-driven development, BDD)
  - compiling: Roslyn, .NetSDK

Alternative to jenkins and  github actions: GitLab, CirleCI, TeamCity, TravisCI.

Сhoice between self-hosted or a cloud-based environment depends on the task at hand and follows from the pros and cons of the environment.
Let's describe the cloud as a ready-to-use product behind which there is a team of more than 6 people with all the attendant:
    practically: just read instuctions  and use, no need to invent anything
    convenience: The experience of other clients with similar tasks is taken into account 
    scalability and integration: operability in different configurations and with various common systems (from protocols to payment systems)

In terms of self-hosted it is the opposite: creativity, freedom and control, balance and responsibility.
And the answer: if the project is closed or unique in its essence, then local development makes sense, in other cases you need to use what works well. What do we want: innovation or competitive product?

It’s just an ideological struggle, where consumerism wins, and the choice of THE WAY is not so important.