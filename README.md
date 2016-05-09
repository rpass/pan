# Pan
#### The note keeping companion

Pan is a pet-project named after Lyra's daemon (companion) in the Phillip Pullman *His Dark Materials* books.
I am to make pan an intelligent, trustworthy and reliable companion for keeping private notes for a long stretch of time; reminding the user of events long-passed or yet to come; and giving sage insight into patterns within and relationships between the user's notes.

It will begin as a RESTful API that exposes CRUD services to a datastore for saving and retrieving notes. A Web application will be developed as a front-end to interact with the API but the emphasis will be placed on the API since the belief is that interfaces can be many and varied.

From there it's services will grow to perform analysis on the notes.

Most importantly this project is an opportunity and **playground** for trying new technologies, patterns and ideas. I may not make any feature improvements for a while but I might spend time replacing one module for another or for a module I write for my need.

A philosophy underpinning the architecture of the application is that the **reliable storage** of the notes and **long-term access** to them over decades to come is a priority. This means protection against frameworks and technologies becoming obsolete. I aim to reduce risk of deterioration by avoiding and designing around strong coupling with 3rd party libraries and frameworks *ahem* angular. This being said, I understand the benefit of rapid development and prototyping afforded by the use of frameworks, I just aim to fortify the application against aging and deteriorating by slowly replacing the dependencies with core technologies (vanilla JS and entrenched libraries like jQuery).
