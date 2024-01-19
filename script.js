const messages = [
  {
    sender: "Sneha",
    text: "Her presence resonates with the confidence of cabaret, the elegance of pinot noir, the friendly warmth of Merlot, and the vibrant spirit of blanc, creating a captivating aura.",
  },
  {
    sender: "Karthik",
    text: "She is a genuine and caring person"
  },
  {
    sender: "Shashank",
    text: "What I love about her the most is her resolute fearlessness in expressing her thoughts, her unswerving acceptance of the person that I am, and her infinite presence throughout the highs and lows. You're the best, no matter what people say sharu❤️",
  },
  {
    sender:"Vaishak",
    text: "Her presence Makes every moment brighter"
  },
  
  {
    sender:"Sarah",
    text: "Sharanya is the most genuine person I know without a doubt, and will ALWAYS make time for you"
  },
 
  {
    sender:"Taylor",
    text: "Gosh it is hard to narrow down to one thing… my favorite part about her is her genuine and selfless interest in other people. She is so kind 🥹❤️"
  },
  {
    sender:"Dhruthick",
    text: "My favourite thing about sharanya is her taste in romcoms and the inner child within her very mature self"
  },
  {
    sender:"Brynn",
    text: "Sharanya is a ray of sunshine on the cloudiest of days. She’s always the best person to hype you up and make you feel beautiful. She’s the little angel on your shoulder, pushing you to be a better person and never afraid to tell you a hard truth. She’s got a huge heart to match her huge smile. I’m so lucky to have her as a friend"
  },
  {
    sender:"Hannah",
    text: "Okay so the best part of Sharanya to me is that she is the most generous and caring friend. I know she would do anything to help or be there for the people she loves. She also gives the very best head rubs in the world!"
  },
  {
    sender:"Jenn",
    text: "I honestly feel like she would kill for me, like commit crimes. She will ALWAYS be on your side. She’s so easy to talk to about anything and everything, but especially the hard things. She makes you feel special and loved and does not let you forget it. Her sense of humor is insanely good and her laugh is contagious. She’s always down for a good time, or an okay time too. She’s content just sitting on the couch together. Her hugs are so warm :)I know she’ll be my friend for life."
  },
  {
    sender:"Shishira",
    text: "Happiest Birthday Shanyaaa, The best part about you is that, even though you stay so far apart, when I text and ask you if are you free the next minute we are having a video call. Even though the time zones are different you make sure that you connect with me and make sure you’re there for me in my ups and downs. This is more than I can ask from a gem like you. May you have all the success and happiness in the world because you deserve it. Love you loads…"
  },
  {
    sender:"Nanditha",
    text: "I love how she brightens every room she walks in and how wonderful she is , I’m glad to have her in my life. The best thing about sharu is she’s there for me when I least expect it , it’s the smallest things like just checking up on me , she just knows how to make a person smile it comes to her very organically "
  },
  {
    sender:"Amarthya",
    text: ""
  },
  
  {
    sender:"Amit",
    text: "The best thing about sharanya is her go-get nature, she’s a focused person which is very admirable. From when I saw her in Ramaiah to working in a clinic she has been the same driven person working for better things. <br><br>Happy birthday Sharanya 🩵, hope you achieve your goals you have set for yourself. Own that personality 🫡 Warm regards, Your Biter Friend 😁"
  },

  
  
  {
    sender: "Shravya",
    text: "I think growing up with her... The best things about her are that she's never too quick to judge... And frank about most things ❤️"
  },
  {
    sender: "Nikhil",
    text: "As a friend i feel Sharanya is very goal oriented and hard working which is one of the best things about her , I wish I could have that  🙈"
  },
  {
    sender: "Sindhu",
    text: "Hey Panni 🐷 happy SHARU day!! 🎊🥳 My always positive radiant glowing light! Mature, sassy and good sense of humor - thats Sharu. All 3 unexpected qualities for our cousin clan 😂 I can’t imagine to live without you…cheers to our gossip sesh, life changing stories, inside jokes, and seeing you grow to this beautiful, resilient woman! <br><br>I am veryy proud of everything you do. You are my baby sister and will always be ❤️ ( though you have never felt I am elder to you 😜) Happyy birthday and I love you 😘",
  },
  {
    sender: "Anirudh",
    text: "Sharanya is one of kindest and most genuine people I have ever known. She cares a lot about the people is close to and I am super glad to have her in my life. She's hardworking, determined and funny, and she makes me a better person everday"
  },
  {
    sender: "Bala",
    text: "It's difficult to ask someone to describe the best thing about their best friend. Because everything about Sharanya is the best. She's kind, independent, empathetic but stands up for herself and so much more. I am truly lucky to have met her and to grow up with her because I can see just how far she's come and I'm so proud of her. :) <br><br> I love you, Sharu. I know we grew up reading numerous books and watching countless romcoms that had a Happily Ever After and Greatest Love Story, but having you in my life, unflinchingly in my corner makes me think that our friendship is no less than the romance in these stories. And we can be like Lilly and Mia as we live out our own happily ever afters. ❣️ <br><br> Cannot wait to see you again and I miss you. 😭❤️ Loads and loads of love as you turn 25, and officially become a fully grown adult with a fully developed prefrontal cortex. ❤️❤️❤️"
  },

];

const rightContent = document.getElementById("msg");

window.onload = function printmessages() {
  const showInHTML = messages
    .map((message, index) => {
      return `
            <div class="message-card ${message.sender}">
                    
                    <p>${message.text}</p>
                    <p class="sender">${message.sender}</p>
                  </div> 
            `;
    })
    .join("");

  rightContent.innerHTML = showInHTML;
};



