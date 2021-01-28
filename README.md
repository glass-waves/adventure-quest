# adventure-quest
## Home Page
1) Header w/ title of game.
1) Description of game 
1) User input
    * name
    * choose a character
        * each character comes with a set amount of _sanity_, _media_ _exposure_ and 0 _deprogrammed_.
    * a submit button
        * on submit, user data will be save in local storage as properties in a USER object and the user will be taken to the map page. 
        * the properties of the USER are as follows
            1) Name
            1) Character
            1) _Sanity_ Remaining
            1) _Media Exposure_
            1) number of Deprogrammed
            1) quests completed
## Map Page
1) Background picture of the united states
1) Link boxes on cities in the US that each redirect to a different quest page. As quests are completed, the boxes are checked. 
    * On click, the user should be taken to the quest page, which is appended by the quest ID corresponding to the city selected. 
1) counter of cities deprogrammed

## Quest Page
1) Header with name of quest/city
1) photo representative of quest
1) a description of the quest
1) multiple choice radio buttons to select action
1) a submit button
    * on submit:
        1) user should be alerted of result of choice
        1) user _sanity_ and _deprogrammed_ should be updated depending on result
        1) User should be directed to results page if:
            * _sanity_ is at or below zero
            * user has completed all quests
        1) if neither are true, direct user back to Map page

## Data to be stored in each Quest object

1) an id (a string)
1) a title (a string)
1) a position on the map(an object with absolute properties)
1) a description of the quest (a string)
1) a property titled choices with a value of an array of choices. (an array)
    * each choice object in the array should have:
        1) an id (a string)
        1) a description (a string)
        1) a result (a string)
        1) _sanity_ improvement or reduction (a number)
        1) _media exposure_ amount(a number)


## Potential Qanon Adversaries

1) Q Shaman(Arizona)
1) Sydney Powell (Virginia)
1) Rudy Gulianni(New York) 
1) Alex Jones (Texas)
    ```
    id: 'jones',
    title: 'Jonesin for Q',
    position: {},
    dscription: 'While traverssing the raw beauty of Texas countryside, you come across a sweaty, agitated man shouting'
    ```

1) Marjorie Taylor Green(Georgia)


