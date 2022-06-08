# battleship
Battleship project for the Odin Project.

---Devlog---

June 3rd, 2022

    AAAAHHHHHHHHHHH setting up this whole tech stack thing is suck a nightmare. I barely understand what webpack is for. Sure, I get that webpack dev server is crazy useful, but are there other things it's doing that are more impactful than live reloading? I have no idea, because I have barely any idea what it does in the first place.

    As an aside, everything is working in the stack now. I have all my usual stuff plus Jest. But now I need to figure out how to get jest running at the same time as the dev server, because if I have to close the server to run testing, it completely defeats the purpose of the server. I think I did find a page on how to do it, though. 
    
    As another aside, I also barely understand the point of writing tests by hand. I can imagine larger test suites to automate testing different cases, but after hours of reading and watching content regarding the uses of testing, I still don't get it. Maybe over time, it'll make more sense, but like with a lot of the stuff I'm reading about, when I can't associate it immediately with a potential use case, I barely care. Hopefully over time I will care more. Maybe if I make a bunch of tests like it seems this project is pushing me to do. I get that console.log is overused, but how is it not ten thousand times more convenient in so many use cases? I write a test, it fails completely. Where did it fail? How far back in the operations? I have no idea until I go and see different values at different points! I'm really hoping that future me will come back to this devlog and say, "Why, that young Seb so full of energy, it only took mildly degenerate smut for him to pop a chubby, and he thought testing and webpack were wastes of time!" 

    For the time being, this is largely frustrating. And I imagine a future where I spend eight hours setting up my tech stack before I can even begin conceptualizing a project. But I also imagine a future where I've learned some sort of stack generator that just builds all this boilerplate stuff for me. Or I may even understand how all these different pieces work one day. There's hope yet. 

    There are relatively straighforward ways to run the server and testing at the same time. And then there's having two terminals open. Yikes on me.

June 5th, 2022

    So as per usual, I looked at the other battleships projects people have made, and decide I needed to spice mine up at least a little bit. Last night I drew up some shipgirl designs a la Azur Lane. Not that I play Azur Lane, but if I understand correctly, you basically use real historical ships, but each one is represented by a unique anime waifu. They keep their battleship names though, which sometimes keeps the name cute, and sometimes it's shit like "I-58", which is funny as hell. Same thing here, keeping all the original ship names, and the ships themselves are displayed as ships, but you get a little animation window that represents the girl form when something happens with them. Might have art for the captain/admiral as well. Mechanically it will just be battleship.

    Also want to keep setting up timeframes for these, so I can practice working with deadlines. Considering that I'm basically at zero progress, and how long tic-tac-toe took, I'm gonna aim for 5 or 6 days. No dialogue, just simple little animations, and the only extra credit I'll be going for is the shipgirls. No two player probably, just against AI, and maybe only marginally better than random AI. No perfect AI this time. Not even sure what that would look like for battleship.

    Today's game of the day, Timberborn. City builder/manager but you play as beavers. Seemed to be pretty solid, until I learned of the damming logic. There are droughts that screw you up for a few days every once in a while, and I though the solution was just to stockpile resources, which works OK at first. But, you can dam rivers. This prevents droughts partially. What I tried to do was use levees, which completely stop the flow of water. Except mine was too short, so I flooded my farms, which did have the benefit of expanding the green area I could use to plant. Very cool.

    I really gotta whiteboard out these more logic-intesive projects. Looking at it now, it has such mess of checks to find out what is going on. It technically works, so I'll leave it as is and just try to whiteboard more thoroughly in the future.

    God this is a mess. But I somehow have most of the logic actually working within about one day.Not too shabby.

June 6th, 2022

    Really, this is only day 2. And despite the nonsense spaghetti of code I created yesterday, almost all the functionality outside of AI is there and working, which is pretty cool. Should be able to make the art assets for ship girls and maybe other things today. might make custom ships, which in my head I imagined as difficult yesterday. Thinking about it now, they would just have to have the right dimensions, and then would just be place absolutely relative to the starting cell of a ship with the right orientation. And also be slightly transparent.

    AAAAAAAAAAAAAAAAAAAAAAAAAA I shoud've really structured this differently. Was able to make most of this logic in one day, and the basic version of enemy AI has taken over five hours so far. Pretty much the exact lesson I was expecting to learn from not using TDD. And also not whiteboarding a bit more. It sorta works, but as I add features they become exponentially more difficult to impliment. Yay.

June 7th, 2022

    Been working pretty consistently for the past few weeks, around 40 hours per week. Also been hitting the gym regularly. Feeling pretty good. But at some point, it will be winter and I'll want to be not in this country if possible by then. I also have limited funds to be studying full time, so ideally I will be finished with TOP in about three months. Only five projects left in this JS section, and the advanced HTML/CSS section looks quite short. The last variable is the node.js section. No idea how long that will actually take. As usual, time will tell.

    In regards to this project, mostly only need to add the art assests and logic. And a reset button. And spurce up the whole thing. Maybe a day and a half left. Not bad. I'm also expecting many of the next projects in the JS section to be done within three or four days of starting them, as the past half dozen have not been that long to complete.

    Art is all done. Most of the shipgirls I like. I really sabotaged myself with how I structured this whole thing by the way, if you couldn't tell. Most of DOM cell color changing was done with inlines css styles through JS, so changing them to work with classes was a nightmare.

---To-Do---

-Add game art
DONE-Digitize game art
-Fancy up display styling
DONE-Finish ship logic
CANCEL-Add tests for ship logic
HARD CANCEL-Spice up battleship base gameplay?
    -Unique ships
    -Powerups
    -Different admiral classes/characters
    -Select one ship that has some ability
    -Select one ship that is a decoy
DONE-Have AI randomly place legal ships
DONE-make player able to use target grid to hit ships
DONE-Make AI able to use their target grid to hit ships
DONE-Add game end state
DONE-Add new game button
-Add peeking at AI board with transforms
-add custom strike/miss markers
-Add hit markers to players' boards
DONE-Prevent AI cells exceeding grid limits
DONE-Fix double placing ships
DONE-Fix ship damage bug
-Add actual victory or loss screen
-add credit to gosti on dribbble
