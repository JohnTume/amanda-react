import React, { Component } from 'react';
import Card from './CardUI';
import img1 from '../assets/index.jpg';
import StackGrid from "react-stack-grid";
import sizeMe from 'react-sizeme';
import Data from './warningpic.js';
import './card-style.css';
// import './card-style.css'
class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    //ask about this
    create = () => {
        let Data =
            [["i1.jpg", "When you are being manipulated by someone you are being psychologically coerced into doing something you probably don’t really want to do.A person who is targeted by manipulators who play the victim often try to help the manipulator in order to stop feeling guilty", "You feel fear, obligation and guilt"],
            ["i2.jpg", "A manipulative person might twist what you say and make it about them, hijack the conversation or make you feel like you’ve done something wrong when you’re not quite sure you have, according to Stines.", "You’re questioning yourself"],
            ["i3.jpg", "Rather than violently forbidding you from contacting your friends or family, a controlling partner may just gently nudge you away from them. A controlling partner will] make you feel badly for having a life outside of the relationship.A few weeks or months of fixating on your new love can be normal and fun. But if your partner actively encourages you to break away from your friends, that's unhealthy.", "You Feel Guilty When You Spend Time With Your Friends"],
            ["i4.jpg", "Though almost all partners occasionally criticize each other, when the criticism is constant and contains the implication that you're incapable of making good decisions on your own, that's a red flag. And whether you're talking about your job, your friends, or your wardrobe, the idea that your partner always knows better than you do is dangerous. Their comments are not really about improving your life — they're about undermining your ability to make decisions and take action on your own", "Criticize Lots Of Small Things That You Do"],
            ["i5.jpg", "On occasion, serious couples who are recovering from an incident of infidelity will allow the cheated-on partner access to the other partner's texts and emails for a limited period of time as a form of accountability. But if this is not a deal that you have specifically worked out with your partner in this context (and hopefully with the help of a counselor), it isn't right.", "They Don't Trust You"],
            ["i6.png", "A healthy partner knows that they can't protect you from the messiness of life — they can just support you and stand by your side. If you've gotten yourself into a financial mess, a healthy partner might buy you financial advice books, help you find budgeting apps, encourage you to take a financial planning class, or offer to help you go through your backlog of unopened credit card bills while providing emotional support. But they won't take your bank password, handle your bills, and give you an allowance until you pay off your credit card debt. A healthy partner will offer every kind of support that they can conceive of, but knows that you have to deal with your own problems in the end.", "They Spend A Lot Of Time Talking About Protecting You"],
            ["i7.jpg", "Healthy, stable relationships have a sense of reciprocity built into them. It's inherent that you will look out for each other, and not bean-count every little time you do something to help the other out. If your partner always keeps tally of every last interaction within your relationship—whether to hold a grudge, demand a favor in return, or be patted on the back—it could very well be their way of having the upper hand. And it can be downright exhausting.", "An overactive scorecard"],
            ["i8.jpg", "Controlling people may come on very strongly in the beginning with seemingly romantic gestures. But upon closer inspection, many of those gestures—extravagant gifts, expectations of serious commitment early on, taking you for luxurious meals or on adventurous outings, letting you have full use of their car or home when they're not there—can be used to control you. ", "Creating a debt you're beholden to"],
            ["i9.png", "making you feel guilty for time you need on your own to recharge, or making you feel like you don't love them enough when you perhaps need less time with them than they need with you. It is natural that two partners may not automatically have the exact same needs in terms of alone time, even if they are both extroverts (or introverts). In healthy relationships, communication about those needs leads to a workable compromise. In controlling ones, the person needing the alone time is made out to be a villain or denied the time altogether, taking away yet another way they can strengthen themselves.", "Not respecting Your Need For Time Alone"],
            ["i10.jpg", "When their partner is more passive and the controlling person is likely to triumph in every disagreement that comes up, just because the partner being controlled is more conflict-avoidant in nature or simply exhausted from the fighting that they've done. ", "Getting you so tired of arguing that you'll relent."],
            ["i11.jpg", "Maybe it's your faith or your politics. Maybe it's cultural traditions or your view of human nature. It's great when our partners can challenge us in interesting discussions and give us new ways of looking at the world. It is not great when they make you feel small, silly, or stupid, or they consistently try to change your mind about something important to you that you believe in.", "Making you feel belittled for long-held beliefs"],
            ["i12.jpg", "Humor and even teasing can be a fundamental mode of interacting within many long-term relationships. The key aspect is whether it feels comfortable and loving to both parties. In many controlling relationships, emotional abuse can be thinly veiled as \"I was just playing with you; you shouldn't take it personally.\" ", "Teasing or Ridicule That Has an Uncomfortable Undercurrent"],
            ["i13.png", "You may notice that you are constantly interrupted, or that opinions you express are quickly dismissed or were never acknowledged in the first place. Perhaps the conversation is always so overwhelmingly dominated by your partner that you can't remember the last time they asked you a meaningful question about how you were doing and actually listened to the answer.", "Inability or unwillingness to ever hear your point of view"],
            ["i14.png", "Even if a manipulative person is in the wrong, they will never want to show it. They will normally do what they can to make it seem like they are right and rationalize their behavior. This way, no matter what arguments you give back to them, they will always be right and will always rationalize their behavior to themselves.", " They Will Never Accept The Blame"],
            ["i15.png", "If a manipulator is out of arguments, they might try to provoke you as a last resort. They might say things that would make a normal person question a manipulator’s sanity or do anything to trigger negative emotions and make you angry. The purpose of this is to involve you in a pointless quarrel and make you say something that the manipulator can use in their defense. Tell them that what they’re saying makes no sense — you’re guaranteed to see a tragedy no worse than a Shakespeare play. If you spot this behavior, it’s essential that you stay calm and don’t give in to provocations. Just try to bring the conversation back to the topic. But if your partner goes on behaving this way, it’s better to end the conversation politely.", "They provoke"],
            ["i16.jpg", "Some individuals enjoy “intellectual bullying” by presuming to be the expert and most knowledgeable in certain areas. They take advantage of you by imposing alleged facts, statistics, and other data you may know little about. This can happen in sales and financial situations, in professional discussions and negotiations, as well as in social and relational arguments.", "Overwhelm You with Facts and Statistics"],
            ["i17.jpg", "Some individuals raise their voice during discussions as a form of aggressive manipulation. The assumption may be that if they project their voice loudly enough, or display negative emotions, you’ll submit to their coercion and give them what they want.  The aggressive voice is frequently combined with strong body language such as standing or excited gestures to increase impact.", "Raising Their Voice and Displaying Negative Emotions"],
            ["i18.jpg", "Some people use negative surprises to put you off balance and gain a psychological advantage. This can range from low balling in a negotiation situation, to a sudden profession that she or he will not be able to come through and deliver in some way. Typically, the unexpected negative information comes without warning, so you have little time to prepare and counter their move. The manipulator may ask for additional concessions from you in order to continue working with you.", " Negative Surprises"],
            ["i19.jpg", "It's another way of sapping your strength: making you feel guilty for time you need on your own to recharge, or making you feel like you don't love them enough when you perhaps need less time with them than they need with you. It is natural that two partners may not automatically have the exact same needs in terms of alone time, even if they are both extroverts (or introverts). In healthy relationships, communication about those needs leads to a workable compromise. In controlling ones, the person needing the alone time is made out to be a villain or denied the time altogether, taking away yet another way they can strengthen themselves.", "Not Respecting your Need for Time Alone"],
            ["i20.jpg", "Again, a controlling person is often very skilled at making you feel that you've done something wrong even before you realize what you did. You may walk in the door to find them already angry about something that they found, thought about, or decided in your absence. And they may keep \"evidence\" of your wrongdoing to a point that you may feel they've got a whole case against you—even if you don't quite understand it. From where you put their favorite coffee mug to whether you had lunch with a coworker without them knowing, you will always be assumed to have had criminal motives.", "Presuming you're guilty until proven innocent"],
            ["i21.jpg","While some controlling people like to exert their influence under the radar, many others are openly and chronically argumentative and embrace conflict when they can get it. This can be especially true when their partner is more passive and the controlling person is likely to triumph in every disagreement that comes up, just because the partner being controlled is more conflict-avoidant in nature or simply exhausted from the fighting that they've done.","Getting You so Tired of Arguing that You'll Relent"],
            ["i22.png", "Whether by subtly making you feel less attractive than they are, constantly reinforcing their professional accomplishments as compared to yours, or even comparing you unfavorably to their exes, controlling people often want you to feel grateful that you are in a relationship with them. This creates a dynamic where you will be more willing to work harder and harder to keep them and make them happy—a dream for someone who wants to dominate a relationship.", "Making you feel you don't \"measure up\" or are unworthy of them"],
            ["i23.jpg","Maybe you always assumed you would go to law school, but now your partner is making you feel your grades weren't good enough to get in. Maybe you used to have a lot of drive to own your own business, but your partner tends to think of your ideas as silly and you find you've lost confidence to pursue them further. Often a controlling partner has a way of using you as a weapon against yourself, by planting seeds of doubt about whether you're talented or smart or hard-working enough to make good things happen in your life.","Thwarting Your Professional or Educational Goals by Making You Doubt Yourself"],
            ["i24.jpg","From the outside, people may look into abusive relationships and wonder how the victim stuck around for so long. One of the answers is something called trauma bonding. Manipulative, abusive people tend to be cruel to their partners, and hurl insults at them. They sometimes are also physically violent. However, they didn't start off this way when they were reeling in their victim.Manipulators also give their partners intermittent periods of love and compliments to get them to stick around. These moments are given when the partner has \"behaved\" or has done something right. It's a way of being conditioned, and the victim gets biologically addicted to the emotional push and pull.", "Trauma Bonding"],
            ["i25.jpg", "They always have to be in charge and likes the home court advantage. For example, they insist on hosting you at their apartment and places where they’re familiar, as well as doing things they’re familiar with to make sure they’re always in control. They might also try to force you out of your comfort zone to make you feel vulnerable and reliant on them for guidance.", "They Are On A Power Trip"]
            ]


        // console.log(Data.length);
        let ele = [];
        for (let i = 0; i < Data.length; i++) {
            ele.push(//+ Data[i][0]
                <Card key={Data[i][0]} imgsrc={Data[i][0]} comment={Data[i][1]} sign={Data[i][2]} />
            )
        }
        return ele;
    }

    render() {
        // let res = this.create();
        const {
            size: {
                width
            }
        } = this.props;

        return (
            <div className="container">
                <h1 className='home_header'>Signs of Manipulation</h1>
                <StackGrid columnWidth={width <= 500 ? '50%' : '33.33%'} gutterWidth={6.5} gutterHeight={width <= 500 ? 6 : 10}>
                    {this.create()}
                </StackGrid>
            </div>
        );
    }
}

export default sizeMe()(Cards);