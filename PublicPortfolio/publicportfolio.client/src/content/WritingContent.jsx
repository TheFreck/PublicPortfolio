import { Box, Grid2, Typography } from "@mui/material";

export const essays = [
    {
        title: <Typography><b>Test Driven Development Means Asking Better Questions</b></Typography>,
        body: <Box>
            <Typography>
                Another aspect to TDD relates to how to ask the right questions. Software is a series of questions and answers at the speed of electrons. Writing a test is not simply to make sure the button you clicked will be clickable next time; it's a place to formulate and reformulate your questions. "If I submit these inputs will I get the outputs I expect? What was missing last time that needs to be added and what can I subtract without changing the result?"
            </Typography>
            <br />
            <Typography>
                So what's the deal? Just ask the right question and you're good right? Sure. But how do you know the right question to ask? Among the open problems in math and computing is the famous P vs. NP problem set. What ties this set of problems together is that before the solution is known it can take up to the entire history of the universe so far to try each potential solution. However, once the solution is known it is immediately obviously correct.
            </Typography>
            <br />
            <Typography>
                The Traveling Salesman is a great example. If you have only 3 destinations to visit in the shortest amount of time or distance: A, B, C then you can go in the order ABC, ACB, BAC, BCA, CAB, CBA. You get 6 possible routes to test. If you add an additional destination D you now have ABCD, ABDC, ACBD, ACDB, ADBC, ADCB, BACD, BADC, BCAD, BCDA, BDAC, BDCA, CABD, CADB, CBAD, CBDA, CDAB, CDBA, DABC, DACB, DBAC, DBCA, DCAB, DCBA. You get 24. Adding a fifth destination brings the total possible routes to 120. Six destinations gets you 720 and by the time you get to a measly 10 destinations you have 3,628,800 routes to test. It grows very quickly with each additional destination. But why should we try millions of potential routes when it's obvious to you and me that we would not start in Los Angeles, go to New York, back to San Diego and then to Boston only to arrive back in Los Angeles. Instead we can immediately rule it out and go to New York and Boston on the same trip back east.
            </Typography>
            <br />
            <Typography>
                So already, just looking at it we can come up with better questions than the naïve solutions can. It's not likely that we'll ever come up with a precise solution to this problem. Bees solve it through iteration. One bee flies in whatever order makes sense to hit all the pollen patches. Then another bee takes that route and adjusts it slightly. If they return quicker with more pollen then the next bee iterates off of their route and so on and so forth. This is Test Driven Development. Each bee flies out with the question of will this route be efficient enough to feed the hive and each bee flies back with a less wrong solution.
            </Typography>
            <br />
            <Typography>
                So there are clear advantages to approaching software development as Test Driven in that we can validate our results based on the original question. But the bees teach us another valuable lesson of iteration. Not knowing the right answer means that we need to start somewhere and fine tune it over time. In other words, knowing that there are more solutions than time to test them all means that your first question will never be your last. Instead over many iterations you can arrive at the question whose answer is the software you are writing. Will this be the best solution? Probably not. But in the same way we eliminated many routes that were obviously wrong we can find ourselves in a place where our answer and the more correct answers are so slight as to be indistinguishable.
            </Typography>
            <br />
            <Typography>
                An exchange is often not started by the right question. Rather we get better at asking questions through the iterative process outlined above and through practice asking questions. The more we know about the context the more insightful our questions. In the end those with the best questions win.
            </Typography>
        </Box>
    },
    {
        title: <Typography><b>Quality ≠ Value: but they're related</b></Typography>,
        body: <Box>
            <Typography>
                How do we define a concept like “quality” which is something we can all recognize; which has a lot to do with subjective experience; but can be consistently recognized by many independent observers? Why is Beethoven’s Ode to Joy widely recognized as one of the greatest pieces of music to have been created? Why is Robert Frost widely considered to have written some of the greatest, most profound poems? In the first case we could say that it has to do with the ebb and flow of emotions experienced while listening to it and in the second it could be the way it causes us to think deeply about our own experiences. Does the value change for someone who doesn’t care for poetry? How would that preference affect the quality of the poem? A complicating factor is that AI is now able to write music and poetry that cause us to think and feel. In addition, focusing on the effect of quality doesn’t go very far in telling us how to create it.
            </Typography>
            <br />
            <Typography>
                If our definitions so far are a bit fuzzy we might turn to manufacturing and economics to try to clarify. LEAN is a methodology designed to increase speed while reducing waste and maximizing value. Fortunately for us it given us a fairly concise definition of value even if it doesn’t deal with the concept of quality. Value is whatever the customer is willing to pay for. The customer might have all sorts of fuzzy reasons for valuing one thing over another but this at least gives us a place to plant our flag. Right off the bat, though, anyone who has spent time with humans will know that customers notoriously have bigger eyes than stomachs and would rather get everything for nothing (wouldn’t we all). Ranking wants can be done and assigned a monetary value and so can their costs. Dividing value by cost gives us a convenient metric to evaluate which feature to build. Obviously we choose the feature with the best value/cost ratio. Economists would then identify the second best option and call it the Opportunity Cost. This is what you could have done had you not pursued the best option. Value is based on the preferences and expectations of the customer and is the result of cost-benefit analyses, therefore it is not inherent in the thing itself. Value can be lost by changing preferences failing to capitalize on opportunities or through negligence. Quality, on the other hand, seems to be inherent, though no less ephemeral.
            </Typography>
            <br />
            <Typography>
                If value and quality are not the same thing, they are related enough that considering one can grant insight into the other. In comparing two pairs of jeans, the one with double stitching would be considered a higher quality and more durable than the one with single stitching. You might also consider the one to have higher value than the other. But what about triple stitching? Do the extra stitches improve on the quality? Granted, given the size of the calamity that blows out the crotch of the pants, triple would be better than double. However, how often are we in a situation where the difference makes a difference? What about going overboard with 23 rows of stitches? If each row of stitching adds quality then why not go with 123 stitches? So the discussion of quality is also a discussion of perpetual optimization. Would adding a new layer of stitches add enough quality to justify the cost (or the decreased movement due to the pants essentially being made of stitching)?
            </Typography>
            <br />
            <Typography>
                Quality requires optimization similar to determining value. Planned obsolescence is a helpful concept for thinking about this optimization. The European country side is full of houses built several centuries ago and are still functional dwellings for people. There were many houses built at the same time that have since fallen down. In this case it’s easy to point to the quality of the house still standing. But while many things have changed the basic function of a house is still the same. Houses built to last centuries are a good idea. That said, the first generation iPhone will not be able to handle modern applications and the picture quality will be visibly lacking compared to current standards. An iPhone built to last centuries is not a good idea. Building chips that continue to do the same job long after that job is no longer needed is not a good allocation of quality. So while the individual parts might be of higher durability, the overall product is of lower quality when you consider the waste.
            </Typography>
            <br />
            <Typography>
                If value and quality are different in how we recognize and measure them, they’re also different in how they’re created. The value of an object is created every time we think about that object relative to our wants and our budget. Quality, on the other hand, is built in. As was mentioned in the discussion about planned obsolescence, there are decisions that go into the optimization of performance and durability. These decisions are made during the creation process and represent the values of the creator. Making a 500 year iPhone is only good for the first few years and so the extra durability does not represent extra quality. Making a house that lasts only 2-3 years is also a bad decision, even if it has gold plated fixtures as the gold plating will have nothing to do with the quality of the structure.
            </Typography>
            <br />
            <Typography>
                In the end, both value and quality contain subjective and objective traits. The job of determining the value of the next feature falls on the project manager but the way the feature is implemented and the level of quality that goes into it is completely on the desk of the developer. Developing the highest quality given the constraints of tools and time is where a software engineer adds value.
            </Typography>
            <br />
            <Typography>Some of the books that have informed tehse thoughts include:</Typography>
            <ul>
                <li>Clean Architecture by Robert C. Martin</li>
                <li>Lean Software Development by Mary and Tom Poppendieck</li>
                <li>Zen and the Art of Motorcycle Maintenance by Robert M. Pirsig</li>
                <li>The Music Lesson by Victor Wootan</li>
            </ul>
        </Box>
    }
];

export const poetry = [
    {
        title: <Typography><b>Knowing is Not Necessary</b></Typography>,
        body: <Box>
            <Typography>the particle does not know it is a particle</Typography>
            <Typography>the particle does not know why it is drawn and repelled</Typography>
            <br />
            <Typography>the particle does snot know why it organizes into atoms</Typography>
            <Typography>the atom into molecules</Typography>
            <Typography>the molecule does not know why it organizes</Typography>
            <br />
            <Typography>the hunter does not know why it tracks its prey</Typography>
            <Typography>the prey does not know why it eats the grass</Typography>
            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;grown from the soil remains of long dead hunters</Typography>
            <Typography>Oroboros does not know</Typography>
            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;that it</Typography>
            <Typography>much less</Typography>
            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;why it</Typography>
            <Typography>eats its own tail</Typography>
            <br />
            <Typography>the new does not know why it eats the old</Typography>
            <Typography>the old knows well the appetites of youth and weaves tapestries of fate</Typography>
            <Typography>the molecule does not know the hunter must eat</Typography>
            <Typography>the atom does not know of the prey</Typography>
            <Typography>the particle does not know fate</Typography>
        </Box>
    },
    {
        title: <Typography><b>A Day to Disappear</b></Typography>,
        body: <Box>
            <Typography>What a day to be a stranger</Typography>
            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;in Pioneer Square</Typography>
            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;And the waterfall shares in my meditation</Typography>
            <Typography>What a day to be free</Typography>
            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;from the bondage of time</Typography>
            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;and the piece which holds the square in mock battlefield</Typography>
            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;also holds my mind</Typography>
            <Typography>&nbsp;&nbsp;And I with a thought on my lips</Typography>
            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iced mocha on my tongue</Typography>
            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a pen at my hip</Typography>
            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and the sun on my shoulders</Typography>
            <Typography>&nbsp;&nbsp;And I with the beauty of lonely silence</Typography>
            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;to forget the people and places and prisons</Typography>
            <Typography>But what a day to walk bare chested through a crowd of people</Typography>
            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;only to see my solitude refracted in their smiles</Typography>
            <Typography>And what a day to search for Thelema</Typography>
            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;down rabbit holes</Typography>
            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;in the peopled market place</Typography>
            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;indentured to its own freedom</Typography>
            <Typography>And I pass-</Typography>
            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;Invisible through the ranks of laughing eyes</Typography>
            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;content in my own free flowing asylum</Typography>
            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;ignorent of myself absent, in the vein of human affairs</Typography>
            <Typography>But what a day to sit alone</Typography>
            <Typography>&nbsp;&nbsp;in a crowded room</Typography>
            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;bazaar scenes of slow death</Typography>
            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;premature in their youthful arrogance</Typography>
            <Typography>It's here that I learned to paint a smile</Typography>
            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;and bandage my wounds</Typography>
            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;and cover my scars</Typography>
            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;like any good Zoloft sporting American</Typography>
            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;seeking release from the 20th century nostalgia</Typography>
            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--Soma holidays-</Typography>
            <Typography>It's here I watched as she turned away</Typography>
            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;and left a petal to remember the thorns</Typography>
            <Typography>It's here I waited</Typography>
            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;but I was three days alone</Typography>
            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;'til I found satiety in a thought</Typography>
            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;and now I squirm in my calm</Typography>
            <Typography>It's here I spoke a vow of silence</Typography>
            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;and slipped into timeless trance</Typography>
            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;I closed my eyes on her</Typography>
            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;and slid softly from the safety of a smile</Typography>
            <Typography>And now it's here that I sit</Typography>
            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;while I write my lament</Typography>
            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;for the distance world</Typography>
            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;of an unintelligible poet</Typography>
        </Box>
    },
    {
        title: <Typography><b>A Feather To a Granite Poet</b></Typography>,
        body: <Box>
            <Typography>I picked up a shivering bird</Typography>
            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;from out of the road</Typography>
            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;and felt</Typography>
            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;its last</Typography>
            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;quivering</Typography>
            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;breaths</Typography>
            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;spill out into my cupped hands</Typography>
            <Typography>I thought about mortality</Typography>
            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;and soap box morality</Typography>
            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;and where I fit into the grand scheme</Typography>
            <Typography>There's a love song playing on community radio</Typography>
            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;and I begin to feel sentimental</Typography>
            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;about the community?</Typography>
            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;about the bird?</Typography>
            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;and I can't...</Typography>
            <br />
            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;...and I wonder if it's happy now</Typography>
            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;-left this concrete sorrow-</Typography>
            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;or if it's back already</Typography>
            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;cycled around again</Typography>
            <Typography>It's hard for me to pity the deep rollers</Typography>
            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;when I die so often</Typography>
            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;every day</Typography>
            <Typography>I'm losing my expectations</Typography>
            <Typography>I'm not writing as forceful as I'd like to be</Typography>
            <Typography>But, when you've built up against a shout</Typography>
            <Typography>&nbsp;&nbsp;&nbsp;&nbsp;a whisper may be enought to shatter stone</Typography>
            <Typography>I lay the bird in a painted garden</Typography>
            <Typography>And watched the wind whisper its soul back home</Typography>
        </Box>
    },
    {
        title: <Typography><b>Rites of Passage</b></Typography>,
        body: <Box>
            <Typography>awakened by traffic</Typography>
            <Typography>broke and smokeless</Typography>
            <Typography>hiding wisdom beneath layers of nights slept in the underpass</Typography>
            <Typography>dignity like a tarnished quarter</Typography>
            <Typography>lies squared away in the holes in his shoes</Typography>
            <Typography>worn hands that have played the blues</Typography>
            <Typography>pick from half spent cigarettes</Typography>
            <Typography>out of street-side ash cans</Typography>
            <Typography>finding the fix</Typography>
            <Typography>and another nail in the coffin</Typography>
            <br />
            <Typography>passage from the cold</Typography>
        </Box>
    },
    {
        title: <Typography><b>the universe</b> (<em>a haiku</em>)</Typography>,
        body: <Box
            sx={{
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    alignContent: "left"
                }}
            >
                <Typography>ten rays from the eye</Typography>
                <Typography>eleventh becomes a serpent</Typography>
                <Typography>her dance partner</Typography>
            </Box>
        </Box>
    },
    {
        title: <Typography><b>a haiku response to a fortune cookie which said: "you shall acheive perfection soon"</b></Typography>,
        body: <Box
            sx={{
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    alignContent: "left"
                }}
            >
                <Typography>to offend just one</Typography>
                <Typography>only small satisfaction</Typography>
                <Typography>offend everyone</Typography>
            </Box>
        </Box>
    }
];

export const lyrics = [
    {
        title: <Typography><b>Letters to the Backseat</b></Typography>,
        body: <Box>
            <Typography>[<em>intro</em>]</Typography>
            <Typography>lighter touch lets the pretty play</Typography>
            <Typography>they'd never leave if they had it their way</Typography>
            <Typography>and maybe I don't know what the future holds so dance with me here</Typography>
            <br />
            <Typography>new to life</Typography>
            <Typography>first to laugh</Typography>
            <Typography>you can't believe the way they get you in their grasp</Typography>
            <Typography>and you know the world goes on because the second shift is getting in gear</Typography>
            <br />
            <Typography>don't close your eyes or you'll miss it</Typography>
            <Typography>it doesn't come around again</Typography>
            <Typography>and don't be discouraged by the possibility</Typography>
            <Typography>that you'll spin your wheels today</Typography>
            <Typography>but tomorrow goes your way</Typography>
            <Typography>and be grateful</Typography>
            <br />
            <Typography>[<em>instrumental</em>]</Typography>
            <br />
            <Typography>pick your poison</Typography>
            <Typography>tap your tune</Typography>
            <Typography>shoot for the stars and you may end in the loony bin</Typography>
            <Typography>sometimes you've got it</Typography>
            <Typography>and sometimes you've gotta fight to hold on</Typography>
            <br />
            <Typography>clear your head before you let it roll</Typography>
            <Typography>give 'em hell until it follows you home</Typography>
            <Typography>and you hope someday they'll understand</Typography>
            <Typography>but what you do today sets the tone</Typography>
            <br />
            <Typography>what to say when they listen</Typography>
            <Typography>the timing tells you everything</Typography>
            <Typography>what do you ask when the anwser's always roses</Typography>
            <Typography>be careful who you claim</Typography>
            <Typography>be mindful of the game</Typography>
            <Typography>and be grateful</Typography>
            <Typography>[<em>outro</em>]</Typography>
        </Box>
    },
    {
        title: <Typography><b>Desert Live</b></Typography>,
        body: <Box>
            <Typography>[<em>intro</em>]</Typography>
            <Typography>steel your gaze</Typography>
            <Typography>hone your mind</Typography>
            <Typography>sacrifice what is sacred</Typography>
            <Typography>for victory stands in the midst of ruin</Typography>
            <Typography>so what do you do</Typography>
            <Typography>when you're coming apart at the seams</Typography>
            <Typography>and tell me what do you dream</Typography>
            <Typography>while swimming through oceans of stars in the desert</Typography>
            <br />
            <Typography>make your move</Typography>
            <Typography>shape your time</Typography>
            <Typography>light the fuse that is wrapped around</Typography>
            <Typography>everything you've ever known and hey now</Typography>
            <Typography>what do you do</Typography>
            <Typography>when you're coming apart at the seams</Typography>
            <Typography>and tell me what do you dream</Typography>
            <Typography>while swimming through oceans of stars in the desert</Typography>
            <Typography>and milking the night for her infinite lunacies</Typography>
            <br />
            <Typography>[<em>instrumental</em>]</Typography>
            <br />
            <Typography>rub your eyes</Typography>
            <Typography>morning come rise</Typography>
            <Typography>more time to build up a world</Typography>
            <Typography>that we'll topple once the sun has fallen out of the sky</Typography>
            <Typography>welcome to the desert at night</Typography>
            <Typography>[<em>outro</em>]</Typography>
        </Box>
    },
    {
        title: <Typography><b>Old Basket of New Tricks</b></Typography>,
        body: <Box>
            <Typography>[<em>intro</em>]</Typography>
            <Typography>woke up for the first time today</Typography>
            <Typography>second time it's happened this week</Typography>
            <Typography>three in a row means there's something really going down</Typography>
            <br />
            <Typography>I couldn't feel the arms or the legs of my old life</Typography>
            <Typography>free to fail, fall or fly away</Typography>
            <Typography>sailing a star through night time to light a new day</Typography>
            <br />
            <Typography>[<em>instrumental</em>]</Typography>
            <br />
            <Typography>out here at the edge of the atmosphere</Typography>
            <Typography>beyond the comforts of settled ways</Typography>
            <Typography>gently passing the days</Typography>
            <br />
            <Typography>can't go back</Typography>
            <Typography>once you've seen this</Typography>
            <Typography>words cannot compare</Typography>
            <br />
            <Typography>once aware</Typography>
        </Box>
    },
    {
        title: <Typography><b>If Life Has Meaning</b></Typography>,
        body: <Box>
            <Typography>[<em>intro</em>]</Typography>
            <Typography>it's nothing to you</Typography>
            <Typography>but it's everything to me</Typography>
            <Typography>break my beaten heart</Typography>
            <Typography>it weighs to much to take</Typography>
            <Typography>gently roll my mind</Typography>
            <br />
            <Typography>it's nothing to me</Typography>
            <Typography>but it's everything to you</Typography>
            <Typography>rest your weary head</Typography>
            <Typography>in my struggling arms</Typography>
            <Typography>never let you go</Typography>
            <br />
            <Typography>[<em>chorus</em>]</Typography>
            <Typography>never assume the hand that holds you</Typography>
            <Typography>can carry their own load much less yours</Typography>
            <Typography>but somehow sharing yours and my load</Typography>
            <Typography>makes both our loads easier to bear</Typography>
            <br />
            <Typography>[<em>instrumental</em>]</Typography>
            <Typography>[<em>chorus</em>]</Typography>
            <br />
            <Typography>it's nothing to me</Typography>
            <Typography>but it's everything to you</Typography>
            <Typography>wrap your struggling arms</Typography>
            <Typography>'round weak and wounded hearts</Typography>
            <Typography>never let them go</Typography>
        </Box>
    },
    {
        title: <Typography><b>Platic Brain</b></Typography>,
        body: <Box>
            <Typography>patterns play on chaos</Typography>
            <Typography>painting thoughts on plastic brains</Typography>
            <Typography>it reaks of turpentine down in the basement</Typography>
            <Typography>subconscious simmerings</Typography>
            <Typography>perform through techno underlings</Typography>
            <Typography>then drip up through the rusty plumbing</Typography>
            <br />
            <Typography>and no-one knows how we got here</Typography>
            <Typography>and dreams like this last a lifetime</Typography>
            <br />
            <Typography>[<em>instrumental</em>]</Typography>
            <br />
            <Typography>and no-one knows where we are now</Typography>
            <Typography>or knows the way back home</Typography>
            <br />
            <Typography>their screams flow up the stairs</Typography>
            <Typography>past patients counted off in pairs</Typography>
            <Typography>their eyelids pinned together looking in</Typography>
            <Typography>baby blue electric sparks</Typography>
            <Typography>that dance like spiders in the dark</Typography>
            <Typography>designed to print from plastic brain</Typography>
            <br />
            <Typography>and no-one knows what to do now</Typography>
            <Typography>but pick up where we left off</Typography>
            <br />
            <Typography>you'll need galoshes for your tears</Typography>
            <Typography>and chalk to mark the walls with years</Typography>
            <Typography>you'll eat your words when the broth runs thin</Typography>
            <Typography>until then you'll count your breaths</Typography>
            <Typography>in isolation from the rest</Typography>
            <Typography>as you await your upgraid to plastic brain</Typography>
            <br />
            <Typography>and someone walks with an accent</Typography>
            <Typography>and someone sips with a grin</Typography>
            <Typography>and no-one knows where we're going</Typography>
            <Typography>and dreams like this never end</Typography>
        </Box>
    },
    {
        title: <Typography><b>Takeoffs and Landings</b></Typography>,
        body: <Box>
            <Typography>[<em>intro</em>]</Typography>
            <Typography>sleeplessly ticking the seconds away in your bed</Typography>
            <Typography>anticipating the moment the light meets your head</Typography>
            <Typography>wouldn't you know it the sky's already calling your name</Typography>
            <br />
            <Typography>give up what you meant to say</Typography>
            <Typography>and leave another stone for tomorrow</Typography>
            <Typography>feed the soil wrapped around the seeds of thought inspiring me</Typography>
            <Typography>to feel the subtle give and take of every single movement</Typography>
            <br />
            <Typography>and you don't know how far I've gone to feel this</Typography>
            <Typography>but everything you see becomes important</Typography>
            <Typography>wouldn't you know it the sky's already calling my name</Typography>
            <br />
            <Typography>[<em>instrumental</em>]</Typography>
            <br />
            <Typography>and we both know how far we've come to feel this</Typography>
            <Typography>and everything we see becomes a paintbrush</Typography>
            <Typography>wouldn't you know it the sky's already calling our name</Typography>
            <br />
            <Typography>keep your arms and legs inside</Typography>
            <Typography>the takeoff ride gets rocky</Typography>
            <Typography>where we go will be the product of our choices at the margins</Typography>
            <br />
            <Typography>and we know just how far we'll go to feel this</Typography>
            <Typography>and everything we see becomes a canvas</Typography>
            <Typography>wouldn't you know it the sky's already calling our name</Typography>
            <Typography>[<em>outro</em>]</Typography>
        </Box>
    },
    {
        title: <Typography><b>Right Enough to be Wrong</b></Typography>,
        body: <Box>
            <Typography>[<em>intro</em>]</Typography>
            <Typography>Fall</Typography>
            <Typography>Fall for what you know is true</Typography>
            <Typography>Stand</Typography>
            <Typography>For what it says about you</Typography>
            <Typography>What could go wrong</Typography>
            <Typography>When you're in the right</Typography>
            <br/>
            <Typography>[<em>instrumental</em>]</Typography>
            <br/>
            <Typography>Hear</Typography>
            <Typography>Just what psychophants will say</Typography>
            <Typography>Hear</Typography>
            <Typography>What gets you through the day</Typography>
            <Typography>What could go wrong</Typography>
            <Typography>When you're in the right</Typography>
            <br/>
            <Typography>[<em>instrumental</em>]</Typography>
            <br/>
            <Typography>Cast</Typography>
            <Typography>Cast your stones about your throne</Typography>
            <Typography>Last</Typography>
            <Typography>Until you stand alone</Typography>
            <Typography>What could go wrong</Typography>
            <Typography>When you're in the right</Typography>
            <br/>
            <Typography>[<em>instrumental</em>]</Typography>
            <br/>
            <Typography>Dress</Typography>
            <Typography>Dress the wounds you have sustained</Typography>
            <Typography>Stress</Typography>
            <Typography>Lines you can't maintain</Typography>
            <Typography>What's gone on</Typography>
            <Typography>Since you've been in the right</Typography>
        </Box>
    },
    {
        title: <Typography><b>The Blink</b></Typography>,
        body: <Box>
            <Typography>[<em>intro</em>]</Typography>
            <Typography>Wait for</Typography>
            <Typography>The lunatics trying to impress you</Typography>
            <Typography>Send forth to see what they've given</Typography>
            <Typography>Offerings for making it rain</Typography>
            <br/>
            <Typography>Reach for</Typography>
            <Typography>The pleasure that speaks to the moment</Typography>
            <Typography>Cast off whatever is left when</Typography>
            <Typography>Feeding no longer makes full</Typography>
            <br/>
            <Typography>Settle in-</Typography>
            <Typography>-to your skin</Typography>
            <br/>
            <Typography>Bask in</Typography>
            <Typography>The knowledge derived from our struggles</Typography>
            <Typography>Seeds planted long before buildings</Typography>
            <Typography>Live after buildings are gone</Typography>
            <br/>
            <Typography>Rest your fears</Typography>
            <Typography>And dream in color</Typography>
            <br/>
            <Typography>[<em>instrumental</em>]</Typography>
            <br/>
            <Typography>Life comes</Typography>
            <Typography>And life will conclude in a moment</Typography>
            <Typography>What have we done to remember</Typography>
            <Typography>That we have walked in this place</Typography>
            <br/>
            <Typography>Don't you blink</Typography>
            <Typography>Don't you blink</Typography>
            <Typography>Don't you close your eyes</Typography>
        </Box>
    },
    {
        title: <Typography><b>Voluntary Sisyphus</b></Typography>,
        body: <Box>
            <Typography>[<em>intro</em>]</Typography>
            <Typography>Live for the day when you can</Typography>
            <Typography>&nbsp;&nbsp;breathe your way through moments of panic</Typography>
            <Typography>Try to think of something dramatic</Typography>
            <Typography>Play to the passions</Typography>
            <Typography>&nbsp;&nbsp;of the curious elite as you come down</Typography>
            <Typography>Never skip a beat when you're run down</Typography>
            <br/>
            <Typography>All in good time</Typography>
            <Typography>See how it's done</Typography>
            <Typography>Give it a shine</Typography>
            <Typography>All in good fun</Typography>
            <br/>
            <Typography>Give your all and take what's left and</Typography>
            <Typography>&nbsp;&nbsp;pawn it off to someone who gets you</Typography>
            <Typography>Make it worth the effort to break through</Typography>
            <Typography>Feel what you may</Typography>
            <Typography>&nbsp;&nbsp;before the power shifts toward someone who's been there</Typography>
            <Typography>Or take your most and give it to strangers</Typography>
            <br/>
            <Typography>Pitch into your standard ring</Typography>
            <Typography>&nbsp;&nbsp;and melt into your peers</Typography>
            <Typography>Set the bounds of chaos</Typography>
            <Typography>&nbsp;&nbsp;that will entertain for years</Typography>
            <Typography>When the timer ends the round is up</Typography>
            <Typography>&nbsp;&nbsp;and you're the one who stayed</Typography>
            <Typography>It seems that you like it this way</Typography>
            <br/>
            <Typography>[<em>instrumental</em>]</Typography>
            <br/>
            <Typography>All in good time</Typography>
            <Typography>See how you've done</Typography>
            <Typography>Know that you're fine</Typography>
            <Typography>All in good fun</Typography>
            <br/>
            <Typography>Make your way into the hall</Typography>
            <Typography>&nbsp;&nbsp;of broken windows filled with intentions</Typography>
            <Typography>Change out of the ones you've been wearing</Typography>
            <Typography>Take back the seconds</Typography>
            <Typography>&nbsp;&nbsp;if it costs you an hour it's worth it</Typography>
            <Typography>Give into the moment you've earned it</Typography>
            <br/>
            <Typography>Run to reenforce your borders</Typography>
            <Typography>&nbsp;&nbsp;always bear in mind the costs</Typography>
            <Typography>Lay you claim to fortune</Typography>
            <Typography>&nbsp;&nbsp;once your paradise is lost</Typography>
            <Typography>Dig into defenses</Typography>
            <Typography>&nbsp;&nbsp;when no army comes to invade</Typography>
            <Typography>It just seems that you like it this way</Typography>
            <br/>
            <Typography>[<em>instrumental</em>]</Typography>
            <br/>
            <Typography>Climb up the backs of giants</Typography>
            <Typography>&nbsp;&nbsp;never reach the top</Typography>
            <Typography>Feed your mind's distractions</Typography>
            <Typography>&nbsp;&nbsp;with the battles that you've fought</Typography>
            <Typography>Build a careful logic</Typography>
            <Typography>&nbsp;&nbsp;to convince yourself to stay</Typography>
            <Typography>And remember that you like it this way</Typography>
            <Typography>Remember that you like it this way</Typography>
        </Box>
    },
    {
        title: <Typography><b>When You Come Down</b></Typography>,
        body: <Box>
            <Typography>What would you do</Typography>
            <Typography>Given you</Typography>
            <Typography>&nbsp;&nbsp;could've been</Typography>
            <Typography>Anything</Typography>
            <Typography>&nbsp;&nbsp;that you knew</Typography>
            <Typography>&nbsp;&nbsp;when you ran</Typography>
            <br/>
            <Typography>How could you've known</Typography>
            <Typography>That you'd be</Typography>
            <Typography>&nbsp;&nbsp;all alone</Typography>
            <Typography>With your mind</Typography>
            <Typography>&nbsp;&nbsp;and your bourbon</Typography>
            <Typography>&nbsp;&nbsp;at home</Typography>
            <br/>
            <Typography>Many come highly recommended</Typography>
            <Typography>&nbsp;&nbsp;but you</Typography>
            <Typography>&nbsp;&nbsp;never know what you'll find</Typography>
            <Typography>&nbsp;&nbsp;in somebody else's mind</Typography>
            <Typography>&nbsp;&nbsp;when you see what you should've known</Typography>
            <Typography>&nbsp;&nbsp;all along</Typography>
            <br/>
            <Typography>When will you come down</Typography>
            <Typography>From where once we found</Typography>
            <Typography>What would be our crown</Typography>
            <br/>
            <Typography>[<em>instrumental</em>]</Typography>
            <br/>
            <Typography>Now that you know</Typography>
            <Typography>What to be when you've grown</Typography>
            <Typography>Once with a dream</Typography>
            <Typography>Now awake</Typography>
            <Typography>Now asleep</Typography>
            <br/>
            <Typography>Once fiishing blind</Typography>
            <Typography>Now alive but resigned</Typography>
            <Typography>To the change in the stream</Typography>
            <Typography>And in time</Typography>
            <br/>
            <Typography>Shape what remains</Typography>
            <Typography>Of your face in the game</Typography>
            <Typography>As you sigh</Typography>
            <Typography>And walk slowly away</Typography>
        </Box>
    },
    {
        title: <Typography><b>When You Find It Lemme Know</b></Typography>,
        body: <Box>
            <Typography>[<em>intro</em>]</Typography>
            <Typography>You say you're looking for love</Typography>
            <Typography>When you're just looking for someone to rub up against</Typography>
            <Typography>And while you're looking for love</Typography>
            <Typography>You're just hoping for someone who rubs back</Typography>
            <br/>
            <Typography>But there's love and there's love</Typography>
            <Typography>And there's a serpent and a dove</Typography>
            <Typography>And there's a timer on your skin</Typography>
            <Typography>And it's ticking</Typography>
            <Typography>But there's silence when the needle plays through</Typography>
            <Typography>To the eye of the record</Typography>
            <br/>
            <br/>
            <Typography>You say you're looking for happiness</Typography>
            <Typography>Well look no further than the one who's out of reach</Typography>
            <Typography>But are you searching for something</Typography>
            <Typography>You're safe in know that you'll never find</Typography>
            <br/>
            <Typography>Well there's here and there's now</Typography>
            <Typography>And if you never learn how</Typography>
            <Typography>To chase down more time in the future</Typography>
            <Typography>Then there's silence when the needle plays through</Typography>
            <Typography>To the eye of the record</Typography>
            <br/>
            <Typography>[<em>instrumental</em>]</Typography>
            <br/>
            <Typography>You say you're looking for meaning</Typography>
            <Typography>But you're getting the feeling it's random</Typography>
            <Typography>You say you need it to be real</Typography>
            <Typography>For any sense to be made of your pain</Typography>
            <br/>
            <Typography>But if you think for a minute</Typography>
            <Typography>That it matters at all</Typography>
            <Typography>Then you're closer to fining your reason</Typography>
            <Typography>And the record is short but the silence plays all through the seasons</Typography>
            <br/>
            <Typography>Looking for something</Typography>
            <Typography>Looking for something</Typography>
            <Typography>Looking for something</Typography>
            <Typography>Looking for something</Typography>
            <br/>
            <Typography>But there's love and there's love</Typography>
            <Typography>And once the serpent and the dove</Typography>
            <Typography>Have chased down all the time in the future</Typography>
            <Typography>Then their silence will absorb all of the unsung songs of today</Typography>
        </Box>
    },
    // {
    //     title: <Typography><b>A Night in the Life</b></Typography>,
    //     body: <Box>
    //         <Typography>I can't seem to walk straight</Typography>
    //         <Typography>While the earth is still spinning</Typography>
    //         <Typography>Hey everybody get down</Typography>
    //         <Typography>I can't seem to catch up to the latest beginning</Typography>
    //         <Typography>Hey everybody get down</Typography>
    //         <Typography>Fill up with the right hand and empty with the left</Typography>
    //         <Typography>And then fill up with the right hand again</Typography>
    //         <Typography>People come up with the craziest of anecdotes</Typography>
    //         <Typography>Hey everybody get down</Typography>
    //         <br/>
    //         <Typography>[<em>instrumental</em>]</Typography>
    //         <br/>
    //         <Typography>I can't wrap my head around</Typography>
    //         <Typography>How people go to sleep so fast</Typography>
    //         <Typography>Bed time comes eventually but not before I can't stand up</Typography>
    //         <Typography>Maybe I'll regenerate concurrently with consciousness</Typography>
    //         <Typography>And dreams blend into waking and I digitize responsiveness</Typography>
    //         <Typography>I can't get around the fact</Typography>
    //         <Typography>That nothing comes out right in time</Typography>
    //         <Typography>While talking like I mean it</Typography>
    //         <Typography>When a straight face might help out the cause</Typography>
    //         <Typography>I never seem to know how to tell you that I can't think straight</Typography>
    //         <Typography>Hey everybody get down</Typography>
    //         <br/>
    //         <Typography>[<em>instrumental</em>]</Typography>
    //         <br/>
    //         <Typography>I've always meant to shower you with</Typography>
    //         <Typography>the sounds of sincerity</Typography>
    //         <Typography>And dispel the malaise while we're just passing the time</Typography>
    //         <Typography>Take a rose to show you care</Typography>
    //         <Typography>And take a rose to make them stare</Typography>
    //         <Typography>And take a rose for lovers who will be there tonight</Typography>
    //         <Typography>But how many times do we pick up and go</Typography>
    //         <Typography>And how many times do we care</Typography>
    //         <Typography>Somehow if we ride this tide</Typography>
    //         <Typography>We'll wake up on the other side</Typography>
    //         <Typography>Hey everybody get down</Typography>
    //         <br/>
    //         <Typography>[<em>instrumental</em>]</Typography>
    //         <br/>
    //         <Typography>I can't stand to wake up through the dreams of the memories</Typography>
    //         <Typography>Of people and the places that I really should have been</Typography>
    //         <Typography>And I'd never know the story</Typography>
    //         <Typography>Of just how the things that could have been</Typography>
    //         <Typography>If not for the reminders barreling down on me in stereo</Typography>
    //         <Typography>So hey everybody get down</Typography>
    //         <Typography>I said hey everybody get down</Typography>
    //         <Typography>Tie another on and find your way back in the morning</Typography>
    //         <Typography>Hey everybody get down</Typography>
    //         <Typography>Hey everybody get down</Typography>
    //     </Box>
    // }
];

export default {
    essays,
    poetry,
    lyrics
};