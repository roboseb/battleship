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

---To-Do---

-Add game art
-Digitize game art
-Fancy up display styling
-Finish ship logic
-Add tests for ship logic
-Spice up battleship base gameplay?
    -Unique ships
    -Powerups
    -Different admiral classes/characters
    -Select one ship that has some ability
    -Select one ship that is a decoy
DONE-Have AI randomly place legal ships
-make player able to use target grid to hit ships
-Make AI able to use their target grid to hit ships
