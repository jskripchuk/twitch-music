# Twitch-Music
A website that turns twitch-chat into music!

http://jamesskripchuk.com/twitch-music/

# How to use!
Make sure to input a channel name at the top and press enter!

(It's set to a default channel which is probably not streaming so I'd recommend picking [one of the popular ones](https://www.twitch.tv/directory/all)

For example, let's say you have the channel https://www.twitch.tv/saltybet

You would type in the top "saltybet" and then press enter.

# How it works

The process works like this
1. Get comments from Twitch by using their API
2. Analyze the sentiment of the message (aka is it a positive message or a negative message?) using a sentiment analyzer
3. Play a note when a new message comes in (Every so often a bass note is played in addition to the melody note)
4. Add that to an average sentiment over 100 messages
5. If the overall sentiment is positive, the notes are mapped to a major pentatonic scale
6. If the overall sentiment is negative, the notes are mapped to a minor pentatonic scale

So the music will ebb and flow based on how well the chat is receiving the action!

(When the sentiment is crossing between positive and negative a lot, it gives some weird/dissonant modal mixture so expect that)


