
const GenNew=document.querySelector('#newQuote')
const oldQuo=document.querySelector('.Quote')
const person=document.querySelector('.personName')

const quotes=[
    {
    oldQuo: `Everybody steals in commerce and industry.
            I’ve stolen a lot myself.
             But I know how to steal.` ,
    

    person:`Thomas Edison, 1847-1931`
},
{
    oldQuo: `The Limelight. 
    The actor who steps into this brilliant
    light attains a heightened presence. 
    All eyes are on him. There
    is room for only one actor at a time in
    the limelight’s narrow beam;
    Do whatever it takes to make yourself its focus.
    Make your gestures so large, amusing, 
    and scandalous that the
    light stays on you while the
    other actors are left in
    the shadows.` ,
    

    person:`Anonymous`
},
{
    oldQuo: `If the courtier happens to engage in arms in some public spectacle
    such as jousting ... he will ensure that the horse he has is beautifully
    caparisoned, that he himself is suitably attired, with appropriate
    mottoes and ingenious devices to attract the eyes of the onlookers
    in his direction as surely as the lodestone attracts iron.
   
    ` ,
    

    person:` Baldassare Castighone, 1478-1529`
},
{
    oldQuo: `The Honeyed
    Bear Trap. The bear hunter
    does not chase his prey; a bear
    that knows it is hunted is nearly
    impossible to catch and is 
    ferocious if cornered. Instead, the
    hunter lays traps baited with
    honey. He does not exhaust
    himself and risk his life in
    pursuit. He baits, then waits.` ,
    

    person:`Anonymous`
} ]

GenNew.addEventListener('click',()=>{
    const Brandom=Math.floor(Math.random() * quotes.length)

    oldQuo.innerText=quotes[Brandom].oldQuo;
    person.innerText=quotes[Brandom].person;
})