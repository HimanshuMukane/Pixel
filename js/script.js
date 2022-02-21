let zoomArr = [0.2, 0.3, 0.4, 0.5, 0.6, 0.8, 1, 1.5];


var element = document.querySelector('#thumbs');
let value = element.getBoundingClientRect().width / element.offsetWidth;

let indexofArr = 4;
handleChange = () => {
    let val = document.querySelector('#sel').value;
    val = Number(val)
    console.log('handle change selected value ', val);
    indexofArr = zoomArr.indexOf(val);
    console.log('Handle changes', indexofArr)
    element.style['transform'] = `scale(${val})`
}


document.querySelector('.zoomin').addEventListener('click', () => {
    console.log('value of index zoomin is', indexofArr)
    if (indexofArr < zoomArr.length - 1) {
        indexofArr += 1;
        value = zoomArr[indexofArr];
        document.querySelector('#sel').value = value
            // console.log('current value is',value)
            // console.log('scale value is',value)
        element.style['transform'] = `scale(${value})`
    }
})

document.querySelector('.zoomout').addEventListener('click', () => {
    console.log('value of index  zoom out is', indexofArr)
    if (indexofArr > 0) {
        indexofArr -= 1;
        value = zoomArr[indexofArr];
        document.querySelector('#sel').value = value
            // console.log('scale value is',value)
        element.style['transform'] = `scale(${value})`
    }
})

var image = [];
image.push({
    src: "images/1.png",
    img2: "modalimg/2.1/1.jpg",
    img3: "modalimg/2.2/1.jpg",
    studentname: "NIKHIL KISHNANI",
    guidename: "JAGDISH JANI",
    thesisquestion: "What changes has pandemic brought into people's life, has everyone adapted to such changes?",
    title: "<br>Self Sustainable",
    topic: "Self Sustainable",
    modalbg: "rgba(217, 163, 131, 0.9)",
    tags: "#Growyourowngreen | #Selfsufficient",
    desc: "Linking urban farming with hybrid work spaces and giving it a different dimension can upscale the production of fresh farm products and can encourage the idea of farm to fork. The aim is to link the conventional food chain with urban farming in different sectors in which both can go hand in hand and help communities become self sustainable."
});
image.push({
    src: "images/2.png",
    img2: "modalimg/2.1/2.jpg",
    img3: "modalimg/2.2/2.jpg",
    studentname: "SHREYA MATHUR",
    guidename: "MILIND MERCHANT",
    thesisquestion: "How can cities grow while being sustainable and community driven?",
    title: "<br>Rethinking City",
    topic: "Rethinking City",
    modalbg: "rgba(217, 163, 131, 0.9)",
    tags: "#Self_Relient | #Community_Driven",
    desc: "As human population increases, the city and its infrastructure faces increasing pressure. The planning of the city, thus, plays an important role. In the current situation, with growing emphasis on sustainability and humans being at the centre of the development, ways have to be devised to make the cities grow in a manner that makes the growth more than just a plug in to the existing city. The functions located in the city also have to be re-looked at to make the cities more diverse and inclusive while helping them being self sustainable. The project aims at creating units that can be used as a base model to be replicated by the cities as and when the need to expand arises. The site chosen has some existing programs and resources that can be utilised and has its own needs that are more superior. The heirarchy of the functions,thus, need to be placedwith respect to the site."
});
image.push({
    src: "images/3.png",
    img2: "modalimg/2.1/3.jpg",
    img3: "modalimg/2.2/3.jpg",
    studentname: "RUSHIL PATEL",
    guidename: "DIPAL CHHAYA",
    thesisquestion: "Is there enough \"clean energy\" to cater to India's needs?",
    title: "<br>Energy Equation",
    topic: "Energy Equation",
    modalbg: "rgba(217, 163, 131, 0.9)",
    tags: "#future | #energy",
    desc: "The rise of global warming predetermines the future, which entails around the idea of sustainable power sources, it currency majorly being electric power. In the age where most global cities are stepping towards the idea of the “Walking City”, India is still attempting to establish more intricate infrastructural networks focused onto the “Transit City” indicating its energy requirements are simply going to increase. Is there a potential for alternate sources? What about nuclear energy? Even the dilemma between centralized and decentralized energy sources remains unsolved, which makes us lose time on our ongoing combat with climate change. This dissertation focuses on the idea of not only educating, but also encouraging the public to get involved in the movement. How can architecture bring about this type of interaction among people? What if this interaction embodies the potential of being scalable from a building level to a city level?"
});
image.push({
    src: "images/4.png",
    img2: "modalimg/2.1/4.jpg",
    img3: "modalimg/2.2/4.jpg",
    studentname: "HARSHIV VAGHELA",
    guidename: "KAIWAN MEHTA",
    thesisquestion: "How can architecture help reduce or restructure the existing waste cycle?",
    title: "<br>Waste management",
    topic: "Waste management",
    modalbg: "rgba(217, 163, 131, 0.9)",
    tags: "#garbology | #junkyardplanet",
    desc: "The relationship between industry, waste, and urbanism is one fraught with problems across all cities. The interrelated nature of these systems of flows is in critical need of re-evaluation. This thesis critiques the system of Municipal Solid Waste Management as it currently exists in Mumbai as a necessary yet undesirable ‘invisible infrastructure’. Industry and waste environments have been pushed to the periphery of urban environments, severing the relationship between the urban environment we inhabit and the one that is required to support the way we live. The flow of garbage from cities of high density to landscapes of waste has created a model of valuing waste as a linear system that separates input from output. This thesis investigates ways that industry, waste, and urban ecologies can work to reinforce one another. The goal of this thesis is to repair the physical and mental separation of waste and public activity through architecture. This thesis will propose ways to tie urban waste infrastructure and public amenities together through the merging of architecture and landscape to create new avenues for public engagement with waste processes"
});
image.push({
    src: "images/5.png",
    img2: "modalimg/2.1/5.jpg",
    img3: "modalimg/2.2/5.jpg",
    studentname: "SHREYA GUPTA",
    guidename: "KAIWAN MEHTA",
    thesisquestion: "How can design potentiate the resourcefulness & collective intelligence in hyperstressed neighbourhoods?",
    title: "<br>INBETWEEN CITIES",
    topic: "Energy Equation",
    modalbg: "rgba(91, 158, 166, 0.9)",
    tags: "#KNOWLEDGEPRODUCTION | #COLLABORATIVEENTERPRISING",
    desc: "The inbetween spaces, extensions to home, are galleries into life & lifestyle of the people. Most capitalised in hyper stressed settlements in urban contexts, these extensions are the reflections for high degrees of contestation & segregations. The people, devoid respectable living conditions, put together small scale, frugal, comanaged systems to make ends meet. These systems, are infact, a testimony to their collective intelligence, to the knowledge production at the margins. In between & beyond the extensions, my thesis recognises the cultural production by the people. It argues that these settlements are rightfully entitled for more than just basic infrastructural amenities. Their circumstances, can not detract the demand for an cultural production infrastructure system."
});
image.push({
    src: "images/6.png",
    img2: "modalimg/2.1/6.jpg",
    img3: "modalimg/2.2/6.jpg",
    img4: "modalimg/6.jpg",
    studentname: "ARUSHI KEJARIWAL",
    guidename: "KAIWAN MEHTA",
    thesisquestion: "What is the realm between functionalist specificity and generic flexibility?",
    title: "<br>Polyvalent Adaptations",
    topic: "Energy Equation",
    modalbg: "rgba(91, 158, 166, 0.9)",
    tags: "#EvolutionOverErasure | #TypologicalCompatibility",
    desc: "Adaptability is the ability of a building to be altered in order to be compatible with developing demands. Failure to adapt leads to redundancy and eventual, wasteful demolition. However, buildings can respond to changing conditions by implementing time-based design thinking over overdetermined function-based design thinking. Engaging with architecture that adapts, rather than stagnates and interacts with users, rather than inhibits. The only real permanence is that of change. On this spectrum of change, Polyvalent Adaptability lies in the middle of Functionalist Specificity and generic, one size fits all, Flexibility. On the two extremes, neither specificity [just right but for whom?], nor neutrality [tolerable for all, right for no one], can yield efficient solutions. However, Polyvalence is the competence of form with regard to different interpretations. It is a standpoint that can take on a divergent meaning for each individual, by providing for an implicit provocation rather than an explicit suggestion. Essentially, what we seek to achieve is the program for a ‘programless building’, by concentrating on what every conceivable building needs. Therefore, its application lies in exploring various typological compatibilities and the possibilities and potentialities of programs that are strongly rooted in context."
});
image.push({
    src: "images/7.png",
    img2: "modalimg/2.1/7.jpg",
    img3: "modalimg/2.2/7.jpg",
    studentname: "ROZAL MEHTA",
    guidename: "HEMANT PUROHIT",
    thesisquestion: "What is the scale and scope of habitation of cities due to the future urban flux?",
    title: "<br>Flux cities",
    topic: "Energy Equation",
    modalbg: "rgba(91, 158, 166, 0.9)",
    tags: "#DynamicSocieties | #Adaptibility",
    desc: "Many cities are currently in a state of transition, experiencing the effects of economic globalization and urban migration; two related conditions in many contemporary cities that significantly transform the city, often leading to inequality and an exclusionary condition. Cities are forced to urbanize to keep pace with the influx of people who arrive in the city each year, while trying to create the necessary workforce for a growing economy. Due to this constant urban flux in the fabric, how can we make more cities flexible and adaptable to such future changes?"
});
image.push({
    src: "images/8.png",
    img2: "modalimg/2.1/8.jpg",
    img3: "modalimg/2.2/8.jpg",
    studentname: "RUHI RATHO",
    guidename: "PRIYANK MEHTA",
    thesisquestion: "How can space evolve in an era of constant change fuelled by prosumers?",
    title: "<br>Evolve & Adapt",
    topic: "Energy Equation",
    modalbg: "rgba(91, 158, 166, 0.9)",
    tags: "#Prosumer | #Reappropriate",
    desc: "Consumption patterns over time have evolved from being just activities of leisure to a more inclusive process of co-creation which encourages participation and new experiences. Today, access to information on the digital realm has blurred the archaic roles of consumers and producers. In constant flux in their roles as creators, there is an alliance to form a new form of sovereignty, as envisioned by futurist, Alvin Toffler– Prosumers. Informed, aware and constantly evolving, the prosumer of today calls for a space that allows this flexibility, adaptability and participation in its creation and re-appropriation. A middle ground, a quasi-public realm, functional yet dynamic, evolving with time to create a successful experience for the user, by the user. A shifting space to meet the shifting identities, shifting demands and shifting realities."
});
image.push({
    src: "images/9.png",
    img2: "modalimg/2.1/9.jpg",
    img3: "modalimg/2.2/9.jpg",
    studentname: "DEVANSH SHAH",
    guidename: "ATREY CHHAYA",
    thesisquestion: "Can obsolete architecture be resurrected as transformative, adaptable, and responsive in a rapid evolving city?",
    title: "<br>Growth and Obsolescence",
    topic: "Energy Equation",
    modalbg: "rgba(91, 158, 166, 0.9)",
    tags: "#Transformative | #Adaptable",
    desc: "Historically, architecture has aimed for permanence and monumentality. Designed things and buildings are soon rendered obsolete in an age of rapid technological innovation. The current city is constructed as an artificial habitat with limited access to resources due to its morphology. The existing city model is redundant and should not be expanded endlessly because it results in neglected areas and pockets of decay. However, this is the current demand. There is a need to rethink the paradigm of development that allow for changes and transformations over time rather than obsolescence in the current linear cycle of development."
});
image.push({
    src: "images/10.png",
    img2: "modalimg/2.1/10.jpg",
    img3: "modalimg/2.2/10.jpg",
    studentname: "NIVA SHAH",
    guidename: "ATREY CHHAYA",
    thesisquestion: "How do you reconceptualise contemporary compacted cities to open up possibilities of creation of open public spaces?",
    title: "<br>Vertical Urbanism",
    topic: "Energy Equation",
    modalbg: "rgba(91, 158, 166, 0.9)",
    tags: "#ReimaginingUrbanism | #VerticalUrbanism",
    desc: "Reconceptualising the Compacted Cities- Vertical Urbanism In a city public life and public spaces are a cohesive unit and become defining factors for the quality of life it provides. Urban public spaces have been omnipresent since the first cities developed and became a medium to foster dialogue and interaction amongst the people. These spaces have evolved over time to lose significance and hence diminished as the contemporary city strives to match global standards of development in terms on density and complexity. With space constraints on the ground plane today, modern day cities are expanding vertically adding another dimension to the city. The existing urban fabric though cannot match the exponential growth rate and hence designing the urban fabric to be more encompassing in a three- dimensional way brings vertical urbanism into play. There is a need to reimagine urbanism and integrate these urban voids into the three dimensional city so as to unpack its catalysing potential all across the city. This research aims to design a hybrid growth module for Mumbai’s future growth, with integrated urban public spaces, to revive the balance between the unbuilt and built spaces in the city."
});
image.push({
    src: "images/11.png",
    img2: "modalimg/2.1/11.jpg",
    img3: "modalimg/2.2/11.jpg",
    studentname: "RICHA SOLANKI",
    guidename: "PRIYANK MEHTA",
    thesisquestion: "How the catalyst nature of space and temporal quality of message and materiality will be brought together?",
    title: "<br>Urban Catalyst",
    topic: "Energy Equation",
    modalbg: "rgba(91, 158, 166, 0.9)",
    tags: "#futuregrowth | #architectureoftommorow",
    desc: "The continued evolution of society implies the continued renewal of everyday experiences in the public forum, where ‘time’ becomes an inevitable material of engagement .As everyone around the world starts to emerge from lock-down, we are wondering what it’s going to be like to re-engage with the spaces and places in our communities that have reshaped, disappeared or have transformed to the changing socio-climate. Today places widely used by citizens and beaten tracks are used as exhibition areas by museologists and curators. This change in venue also changes the presentation techniques of the exhibitions and their ephemeral nature. How the catalyst nature of space and temporal quality of message and materiality will be brought together? The aim is to find a response to this question by analyzing the place, role and impact of architecture and time in the coming of the Information age."
});
image.push({
    src: "images/12.png",
    img2: "modalimg/2.1/12.jpg",
    img3: "modalimg/2.2/12.jpg",
    studentname: "ROHAN THAKKER",
    guidename: "ATREY CHHAYA",
    thesisquestion: "What is the impact of Information Age on Architecture ?",
    title: "Democratization of <br>Architecture",
    topic: "Energy Equation",
    modalbg: "rgba(91, 158, 166, 0.9)",
    tags: "#DigitalFabrication | #DemocraticDesign",
    desc: "In this information age the idea of one size fits all no longer makes sense or is relevant. Technology continues to become accessible to more and more people. This democratization of technology allows the bringing of ‘your own’ voice and ideas to the public domain. Hence, my approach of designing a system or method where the users and the design community have equal participation or say in the process of designing homes for the users is very relevant in the current scenario. Looking at the Indian Construction Industry which is labour driven, the new age technology poses a serious threat so a hybrid digital fabrication method needs to be developed for construction so as to keep the labour situation in mind and still be ahead in the digital fabrication revolution by Skill Upgradation of Labour. Home Ownership in India has been a practice since ages but with the ever changing demands of the users this poses a few problems in the market.So one of my objectives is to find an efficient solution which has the benefits of both home ownership and the freedom of renting homes so as to cope with the flux in the Information Age."
});
image.push({
    src: "images/13.png",
    img2: "modalimg/2.1/13.jpg",
    img3: "modalimg/2.2/13.jpg",
    studentname: "YAGNESH MEHTA",
    guidename: "HEMANT PUROHIT",
    thesisquestion: "How will architecture evolve in response to the constant paradigm shift?",
    title: "<br>Ephemeral Urbanism",
    topic: "Energy Equation",
    modalbg: "rgba(91, 158, 166, 0.9)",
    tags: "#culturalhub and | #prosumerism",
    desc: "The 20th century paradigm shift that came with replacing traditional ways of building by modernist methods. It replaced centuries of cultural preference for humanly adaptive spaces, and instead, gave us the psychologically damaging ones. By 2050, population is expected to exceed 10 billion people, making overcrowded cities one of the most pressing issues. Rapid development of new technologies is changing the needs of communities, which will have a direct impact on the issue of overcrowding and on our built environment. There is a need to design the responsive spaces that adapt naturally to human needs and require a new language to describe the proposed paradigm shift. Is society more receptive today? I believe it is. We have become technological and that has revealed the inadequacies of the industrial model. It is now possible to take the language of contemporary technology, and use it to describe a new kind of experience."
});
image.push({
    src: "images/14.png",
    img2: "modalimg/2.1/14.jpg",
    img3: "modalimg/2.2/14.jpg",
    studentname: "KHUSHALI CHALIAWALA",
    guidename: "HEMANT PUROHIT",
    thesisquestion: "How can underground buildings activate their above-ground public realm by critically analyzing the physical relationship between above and below-ground?",
    title: "<br>Up,Out & Down",
    topic: "Energy Equation",
    modalbg: "rgba(190, 108, 100,0.9)",
    tags: "#transitional | #subterranean_prototype",
    desc: "Building underground provides new insight on all aspects of architecture and urban design. It presents new opportunities not typically available in conventional above-ground buildings to contribute to its aboveground environment. Exceeding beyond its preliminary function as a way to reform cramped and overcrowded urban environments, underground space is frequently being used for more conventional building programs. However, these conventional programs situated underground often neglect their relationship to the above-ground plane. Therefore, the highly internalized nature of contemporary underground architecture sees it have little or no contribution to its above-ground environment. Although it cannot be suggested that underground space represents the optimal solution for buildings, it can be considered as a suitable alternative when considering complex sites, programs and building functions, making underground space a viable alternative to conventional above-ground buildings. One of the most significant design issues is the importance of the ground plane, and the underground spaces relationship to it. This research yields new and improved strategies for connecting underground space with its above-ground public space."
});
image.push({
    src: "images/15.png",
    img2: "modalimg/2.1/15.jpg",
    img3: "modalimg/2.2/15.jpg",
    studentname: "AAYUSHI D COSTA",
    guidename: "HEMANT PUROHIT",
    thesisquestion: "What is the future of Work, Technology and Architecture?",
    title: "<br>Future of Workspace",
    topic: "Energy Equation",
    modalbg: "rgba(190, 108, 100,0.9)",
    tags: "#workandtechnology | #futuretechnopolis",
    desc: "Contemporary technology has caused a fundamental shift in the way we work that blurs the distinction between work and home life. The digital revolution essentially untethered the worker from their desk as the office changed from a location to access physical files to that of the networked office with technology and remote access. The shifts point to the growing ‘public’ nature of work: as opportunities for diverse collaboration have superceded the need for a static, consistent workspace, work has grown beyond the traditional boundaries of workplace and became more urban oriented. In light of the recent Covid-19 pandemic, the project explores the role of architecture in learning, working, meeting up and living communally online, eliminating spatial distance through technology. Over the past half-century, the emergence of immersive technologies allowed us to move from the two dimensions of computer screens to the three dimensions of spatially experienced information, making our interaction with computers an increasingly-architectural concern."
});
image.push({
    src: "images/16.png",
    img2: "modalimg/2.1/16.jpg",
    img3: "modalimg/2.2/16.jpg",
    studentname: "KHUSH KHANDELWAL",
    guidename: "JAGDISH JANI",
    thesisquestion: "In an anthropocene era, is typical vertical densification a psychologically justified answer to our urban habitation & lifestyle?",
    title: "<br>Conducive Habitation",
    topic: "Energy Equation",
    modalbg: "rgba(190, 108, 100,0.9)",
    tags: "#anthropocene_shelter  | #evolutionary_psychology",
    desc: "There has been a proliferating shift in the modern human lifestyle, to an extent that our bodies weren’t evolved for. This is also directly proportional to how we inhabit our shelters today, with more than half of our world population concentrated in urban densities. The Anthropocene era is real, and so is its latent effect on us- increased trivial stress & a natural disconnect, which leads to an unhealthy psyche. The research aims to study the evolution of our shelter & lifestyle, along with the evolutionary psychology, to draw out patterns for instrumentalizing psychologically conducive habitations for our ever evolving modern life."
});
image.push({
    src: "images/17.png",
    img2: "modalimg/2.1/17.jpg",
    img3: "modalimg/2.2/17.jpg",
    studentname: "AYUSHI PRITAMANI",
    guidename: "HEMANT PUROHIT",
    thesisquestion: "How can architecture and design influence the emotional and psychological well-being of its users?",
    title: "The Shaping of Us Rethinking <br> the Bombay High Court",
    topic: "Energy Equation",
    modalbg: "rgba(190, 108, 100,0.9)",
    tags: "#highcourt | #wellbeing",
    desc: "Buildings must be designed in a manner that given them a feeling of security and puts them at ease. For those in the legal profession, the courthouse is a place of work that needs to be comfortable and secure, while for witnesses and jurors it’s an unfamiliar setting that needs to put them at ease. But what about the public and the accused individuals? Should they tremble at the power of the judiciary expressed in an austere monumental building, or should they be reassured by seeing the transparency of justice at work in an accessible, functional space? Courthouses are two-faced complexes. One is very exclusive and private, with almost no public interaction, while the other has an absolutely public interface. This thesis aims to define the duality and tries to develop an architectural approach which seamlessly brings these two aspects together, without conflict. It aims to find an architectural middle ground between the functional requirements of privacy and security and public inclusion."
});
image.push({
    src: "images/18.png",
    img2: "modalimg/2.1/18.jpg",
    img3: "modalimg/2.2/18.jpg",
    studentname: "NIDHI SANGHRAJKA",
    guidename: "ATREY CHHAYA",
    thesisquestion: "How does a city retain its identity despite its fragmented morphology?",
    title: "<br>Urban Fragmentation",
    topic: "Energy Equation",
    modalbg: "rgba(190, 108, 100,0.9)",
    tags: "#1city10identities",
    desc: "The morphological conception of Bombay has been obtained through a land reclamation process of bridging its fragmented islands together, each having a distinct identity, perception, scale, users and topography. This mere land reclamation process has caused the overall urban fabric to be broken down into smaller localities within a singular entity. On one hand it breaks the city apart into smaller parcels of land while on the other hand it creates an “Urban Bricolage” consisting of unique experiences in the city. My research aims at understanding the cause of this fragmentation in most of the post industrial cities, analysing their distinct urban morphology and looking at reactivating the left over spaces caused as a by-product."
});
image.push({
    src: "images/19.png",
    img2: "modalimg/2.1/19.jpg",
    img3: "modalimg/2.2/19.jpg",
    studentname: "SHAZNEEN VAZIFDAR",
    guidename: "ATREY CHHAYA",
    thesisquestion: "How to create relief in an overwhelming urban environment?",
    title: "<br>Multiple Realities",
    topic: "Energy Equation",
    modalbg: "rgba(190, 108, 100,0.9)",
    tags: "#balancingdualities | #futureworkspaces",
    desc: "Cities have always been a space of constant simulation which results in an overwhelming urban environment; eventually leading to a low quality of urban life. The increased stimulus level in urban dwellers is manifested by multiple realities that exist in the city: reality, perceived reality, hyperreality and illusion. The research aims at exploring and understanding these multiple realities which exist in Mumbai in the three chosen locations of Bandra, Ballard Estate and Cuffe Parade. These realities experienced together cause an overwhelming environment in the city and more than often have an adverse effect on its inhabitants. The aim is to strike a balance between these colliding realities so as to create some relief for the urban dweller."
});
image.push({
    src: "images/20.png",
    img2: "modalimg/2.1/20.jpg",
    img3: "modalimg/2.2/20.jpg",
    studentname: "RUCHIKA KHALATE",
    guidename: "MILIND MERCHANT",
    thesisquestion: "How can we imagine the space used by a user that has a totally different lifeworld (individuals with mental or physical disabilities)?",
    title: "<br>Ecstatic-Scapes",
    topic: "Energy Equation",
    modalbg: "rgba(190, 108, 100,0.9)",
    tags: "#Psychedelics | #DestigmatizeSchizophrenia",
    desc: "My thesis subject examines the use of psychedelic architecture as an analytical tool for inserting and building a therapeutic environment in the phenomenological reality of persons suffering from schizophrenia. How can we envisage a user with a completely different lifeworld (individuals with mental or physical disabilities) using the space? The study for this thesis attempts to identify a set of principles and design criteria, such as color and light materials, that will be utilized as a guideline to create a suitable place for patients suffering from schizophrenia. The process entails investigating which elements cause the mental health problem and how they can be managed through therapy. The knowledge gained will be paired with investigations into how design impacts the state of mind. The obtained criteria will be used in the proposal for a therapeutic counseling facility. The inquiry into this subject is an attempt to collect a toolbox of healing environment design strategies with an emphasis on stress reduction and mitigation, and a functional outcome in the shape of a counseling facility that can be replicated in diverse situations to assist individuals all around the world."
});
image.push({
    src: "images/21.png",
    img2: "modalimg/2.1/21.jpg",
    img3: "modalimg/2.2/21.jpg",
    studentname: "KRISHA SANGHVI",
    guidename: "DIPAL CHHAYA",
    thesisquestion: "Where does the sea end and the city begin?",
    title: "<br>Coastal City Punctures",
    topic: "Self Sustainable",
    modalbg: "rgba(190, 108, 100,0.9)",
    tags: "#FluidOccupancies | #ThresholdSpaces",
    desc: "14 out of the 15 largest cities of the world are situated close to a sea or riverside. Due to rapid urbanization, we are not being able to co-exist with the environment but it is essential to do so. Water has always been a major carrier for transport and development; having an established water transport network is synonymous in the city’s growth. The line between land and sea has gone unnoticed, it has been taken for granted by the want for colonial power and land property. The edges are underutilized, neglected and overlooked in the hustle of city life. These threshold spaces need to be re-activated and the society needs to re-engage with the landscape. We need to allow the sea to flow into the city and take on its fluid nature."
});
image.push({
    src: "images/22.png",
    img2: "modalimg/2.1/22.jpg",
    img3: "modalimg/2.2/22.jpg",
    studentname: "TIRTH GAJRA",
    guidename: "DIPAL CHHAYA",
    thesisquestion: "How can multisensory architecture provide a holistic experience in an ocular environment?",
    title: "<br>Immersive Reality",
    topic: "Rethinking City",
    modalbg: "rgba(190, 108, 100,0.9)",
    tags: "#phenomenology | #ExperienceOfTheOrdinary",
    desc: "Architecture exerts a profound influence over our well-being, given that most of the world’s population living in urban areas spend around 95% of their time indoors. However, most of the architecture is designed for the eye of the beholder and tends to neglect the non-visual senses of hearing, smell, touch, and even taste. Multisensory perception provides relevant insights concerning the rules governing sensory integration in the perception of objects and events. This research extends that approach to the understanding of how multisensory environments and atmospheres affect us, in part depending on how we cognitively interpret, and/or attribute, their sources."
});
image.push({
    src: "images/23.png",
    img2: "modalimg/2.1/23.jpg",
    img3: "modalimg/2.2/23.jpg",
    studentname: "AHAN DASGUPTA",
    guidename: "DIPAL CHHAYA",
    thesisquestion: "Where does society progress after the Post-Industrial society?",
    title: "<br>A Contemporary Society",
    topic: "Energy Equation",
    modalbg: "rgba(141, 206, 211,0.9)",
    tags: "#FutureSocieties | #Human-Nature-Technology",
    desc: "How can society be one? Can the boundaries be blurred, and can societies converge for the common good? How can this be achieved? The two ways are when individuals start to understand one another and accept the different points of view or when a global crisis unites all. One of the critical global crises the world is experiencing today is long-term environmental damage, which includes pollution, global warming, deforestation, climate change, etc., all related to nature and technology. So can this human-nature-technology relationship help us understand our context better? Can the idea of rejuvenating nature help society to be better? What ideas can architecture present to help achieve this? The objective of this dissertation would be to address some of these questions through the architecture environment inspired by the fictional world of Manga & Anime (Japanese comics & cartoons), learnings from certain architectural ideologies & proposals, and a few real-life built environments."
});
image.push({
    src: "images/24.png",
    img2: "modalimg/2.1/24.jpg",
    img3: "modalimg/2.2/24.jpg",
    studentname: "AMMAR RASSAI",
    guidename: "ATREY CHHAYA",
    thesisquestion: "How must we reconcile Mumbai's incredible pluralism with its disruptive culture of congestion as the city continues to grow?",
    title: "<br>Culture of Congestion",
    topic: "Waste management",
    modalbg: "rgba(141, 206, 211,0.9)",
    tags: "#Disruption | #Congestion",
    desc: "The paradox of order and disruption has riddled notions of urbanity in cities harnessing metropolitan conditions. My research begins with understanding cities as complex, partially-meditated systems predisposed to disrupt in order to forge or consume urban spaces – the city as a stage for disruption. Cities disrupt temporally, infrastructurally, ecologically, technologically or through their peculiar ‘culture of congestion’. Culture of Congestion (Rem Koolhaas, Delirious New York) refers to not just a cause but a methodological process that a particular city adopts in order to disrupt and deal with growth. Densification and the simultaneous colliding of elite and sub-altern realities have contributed to Mumbai’s conspicuously disruptive culture of congestion: Enclave Urbanism. The disregard for process and Mumbai’s incredible pluralism in favour of form-driven means of design has bred the globally conceived but locally failing typology of the high-rise. Juxtaposed thus, the slum and the high-rise look as if they belong to different worlds, coexistent but irreconcilable."
});
image.push({
    src: "images/25.png",
    img2: "modalimg/2.1/25.jpg",
    img3: "modalimg/2.2/25.jpg",
    studentname: "DIVY VORA",
    guidename: "JAGDISH JANI",
    thesisquestion: "How would architecture adapt to a future scenario of a city?",
    title: "<br>City & Mobility",
    topic: "Energy Equation",
    modalbg: "rgba(141, 206, 211,0.9)",
    tags: "#utopian | #mobilecity | #futurecity",
    desc: "The city has transformed a lot through the years. The current scenario of the city is on a tangent where the future holds rapid changes in the digital and technological advancements. In a future city like this how would the architecture adapt to the scenario? A holistic idea of a city’s transformation from the three waves directed the study towards the desired and undesired states where the desired being the Utopian and the undesired being the Dystopian ideas of a city. No city functions as only white (Utopian) or only black (dystopian). A city always functions in a band of grey and therefore it was important to study both the aspects to understand the structure of the city. The study of utopia and dystopia led to creating my hypothesis of the do’s and don’ts of a city. The world of tomorrow has more than 50% of the buildings and infrastructure that exist today. Therefore, a surgical approach at various scales considering flexibility of a space to retrofitting on old to designing and interconnecting neighbourhoods was the way forward. The thesis thus creates a handbook for the developers of the future to form a sustainable city for tomorrow."
});
image.push({
    src: "images/26.png",
    img2: "modalimg/2.1/26.jpg",
    img3: "modalimg/2.2/26.jpg",
    studentname: "AASHKA AJMERA",
    guidename: "PRIYANK MEHTA",
    thesisquestion: "What role does transit systems play in shaping the change in the future cities?",
    title: "<br>Future of urbanization",
    topic: "Energy Equation",
    modalbg: "rgba(94, 136, 172, 0.9)",
    tags: "#Mixed use | #Blurring edge",
    desc: "Looking at the future of urbanization through transit nodes: By 2050, 70% of the world’s population will be urban. To help cities cope with this massive population growth, urban transport solutions need to improve the way people get safely and sustainably from A to B. The mobility hubs of the future have to respond to and cater to these changes. In order to encourage the use of more sustainable forms of transport, these stations not only have to ensure smooth passenger flows, but they need to truly appeal to the public, to be places they want to visit and return to. As the human population doubles itself, it will become critical to optimize the quality of public spaces, allowing communities to share and interact in spaces that are designed for accessibility and diversity. India’s coastal cities like Mumbai have huge commuter traffic that use railroads and buses in cramped and unhygienic conditions. It’s about time a third alternative, starting with short-distance and inaccessible routes, kicked off to take the pressure off traditional commuter networks. Although Mumbai City is enriched with 67 kilometers of sea front only 14 km of it is active and publicly accessible. This project explores urban water transportation system as an alternate transit solution. The framework creates new connections to the sea, re-engaging neighborhoods to the coast. Envisioned as a mixed-use, porous, and sustainable neighborhood, multimodal transit hub with a fully accessible and vibrant public realm will reduce the city’s reliance on private transportation. The proposal is punctuated with intentional spaces for consistent activity as a catalyst for continued growth."
});
image.push({
    src: "images/27.png",
    img2: "modalimg/2.1/27.jpg",
    img3: "modalimg/2.2/27.jpg",
    studentname: "DEVASHRI DESHMUKH",
    guidename: "KAIWAN MEHTA",
    thesisquestion: "What role do governing authorities play in constraining or constituting of public activities?",
    title: "<br>Repurposing transit-hub",
    topic: "Energy Equation",
    modalbg: "rgba(94, 136, 172, 0.9)",
    tags: "#Hawkers | #Transit",
    desc: "Transit hubs and informal markets are a huge part of the daily lives of common people. They no longer simply provide basic services, but have formed a complex system in the city's structure. These civic activities take place through a series of constant negotiations, evolution, self- organizations, optimization and so on. Although their impact on the city and its people is extensive, they are forgotten by the governing bodies during the planning process. Thus, the thesis aims at empowering such organizations and reinforcing their role in the urban fabric by setting up new opportunities and social interactions."
});
image.push({
    src: "images/28.png",
    img2: "modalimg/2.1/28.jpg",
    img3: "modalimg/2.2/28.jpg",
    studentname: "NAZM FURNITUREWALA",
    guidename: "PRIYANK MEHTA",
    thesisquestion: "How does space aid reintegration of crime affected individuals into society?",
    title: "<br>Locked Out",
    topic: "Energy Equation",
    modalbg: "rgba(94, 136, 172, 0.9)",
    tags: "#reintegration | #lifeafterprison",
    desc: "There is a need for us to take an active role in de-stigmatisation, rehabilitation and re-integration of an ex-convict into society. Complete resolution of this problem requires a multidisciplinary approach, but architecture can provide a platform to reshape the social construct of a criminal, curb criminal tendency and help dissolve the stigma attached to an ex-convict through spatial aspects. The focus of the study is the relationship of the ex-convicts and crime affected individuals with society, specifically looking at the ‘reformation’ and ‘re-integration’ aspects. Through development of a type of transition by spatial features that would act as a platform for crime affected individuals to regain their position in society, the space becomes a sensitizing physical environment to aid the process of reintegration."
});
image.push({
    src: "images/29.png",
    img2: "modalimg/2.1/29.jpg",
    img3: "modalimg/2.2/29.jpg",
    studentname: "PRIYASHI MEHTA",
    guidename: "PRIYANK MEHTA",
    thesisquestion: "How has the global pandemic revolutionised how we conceive live-work-play and what is the future of it?",
    title: "<br>The future of live-work-play",
    topic: "Energy Equation",
    modalbg: "rgba(94, 136, 172, 0.9)",
    tags: "#BlendedConcepts | #flexible",
    desc: "The global pandemic has revolutionised how we conceive working. At this time, a lot of people experienced remote working. This largely started impacting the way in which a lot of companies started looking at the concept of working. The idea of working has started to become very flexible and people have started to look at coworking spaces massively. Along with the rise of coworking, people have also started to change the way they prefer to live due to a number of factors like mobility, flexibility etc. The idea is to create a blend of spaces creating a hybrid structure that combines the concepts of working, living, socialising and networking. A place where here would be share of facilities which would also play an important role to connect individuals and help them collaborate as well. This entire system would be a flexible framework which could have the scope of multiplying in different locations."
});
image.push({
    src: "images/30.png",
    img2: "modalimg/2.1/30.jpg",
    img3: "modalimg/2.2/30.jpg",
    studentname: "ANUSHKA NAIK",
    guidename: "ATREY CHHAYA",
    thesisquestion: "How to reduce seclusion in urban settings within the framework of society as a whole?",
    title: "<br>Isolation in Urbanity",
    topic: "Energy Equation",
    modalbg: "rgba(94, 136, 172, 0.9)",
    tags: "#Socialissues | #City of transformation",
    desc: "Cities have rapidly transformed in the last few decades resulting in change of building typology and use of space in the city. Along with the economic and population growth came the decline of societies in the city. The growth or decline of one element in the city triggers the change in its surroundings, from the built forms to the residents of that area. These changes may not be favorable to all and acts as a burden to those who have to their lives to fit and go along with the rapid urbanization. The rapid transformation has resulted in rapid decline of basic spatial necessities needed by people to feel connected to their surroundings and the community, causing more spaces within the city to be perceived as solitary spaces and leading to many city dwellers feeling isolated. There is a need to re-think and relook at methods to design and transform spaces in the city to reduce isolation but also allow for an opportunity to thrive better and connect."
});
image.push({
    src: "images/31.png",
    img2: "modalimg/2.1/31.jpg",
    img3: "modalimg/2.2/31.jpg",
    studentname: "DRISHTI SHAH",
    guidename: "HEMANT PUROHIT",
    thesisquestion: "How can housing coexist and be defined as a larger concept having numerous relationships?",
    title: "<br>Rethinking Housing",
    topic: "Energy Equation",
    modalbg: "rgba(94, 136, 172, 0.9)",
    tags: "#largerconcept | #sociableandcoexisting",
    desc: "The emergence of heterogeneous societies in Mumbai is closely tied to the developments in the late 19th and 20th century. The first which came up were the chawls which helped in dictating a good quality of life for people. The evolution of different housing typologies has subsequently led to the evolution of the spatial arrangement of these typologies. More and more developments took place which were manifested by the pressures of the city (work) and eventually affected the spatial configurations of contemporary housing, which in turn affected the quality of life, sustainability, approachability and sociability between people. It lost its charm and importance in this fast and ever-changing city. Housing is always narrowed down to a single relationship i.e., live but it is a much larger concept having numerous relationships. Hence, rethinking housing as a larger concept can redefine housing in a suitable way."
});
image.push({
    src: "images/32.png",
    img2: "modalimg/2.1/32.jpg",
    img3: "modalimg/2.2/32.jpg",
    studentname: "PREYA SOMANI",
    guidename: "MILIND MERCHANT",
    thesisquestion: "How can we design educational institutions for the users to enhance and improve learning?",
    title: "<br>Educational Architecture",
    topic: "Energy Equation",
    modalbg: "rgba(94, 136, 172, 0.9)",
    tags: "#RethinkingEducation | #UserOriented",
    desc: "Educational institutions play a pivotal role in shaping our future. The environment in an educational institution is meant to boost our ability to learn and grow. Learning spaces need to encourage or allow many types of activity. These include reflection, collaboration, group learning, individual learning, presentations, and computer use. Most of the times we do not design spaces based on the requirements of the users. We have a set of minimum standards that we prefer to follow as it makes the design process a little simpler without thinking about who and how the space should be used. By doing so, we tend to ignore the smaller details that would help enhance the quality of a space which in turn could help enhance the quality of learning in that space. The quality of a space can also have an impact on the emotional and social state of the user which could in turn affect one’s ability to learn. Thus designing an educational space from the point of view of the user could not only be beneficial in terms of enhanced learning but would also help create personalised spaces where everyone has the opportunity to thrive."
});
image.push({
    src: "images/33.png",
    img2: "modalimg/2.1/33.jpg",
    img3: "modalimg/2.2/33.jpg",
    studentname: "RAEKA TAMBAWALA",
    guidename: "KAIWAN MEHTA",
    thesisquestion: "How can borders be re-imagined as opportunities for interaction, while maintaining identity, diversity, security, and sense of place?",
    title: "<br>Paradigm Shift",
    topic: "Energy Equation",
    modalbg: "rgba(94, 136, 172, 0.9)",
    tags: "#provisionalpermanence | #socialpotential",
    desc: "Borders are the physical markers that do not merely define territorial limits, but also act as psychological symbols of ‘us’ and ‘them’. The effects of border disputes are not contained only at the borders: they multiply through various scales of influence and find their way into the workings of everyday life, resulting in perception gaps which are not determined through personal experience, but through filtered information. If we gave citizens from conflicting backgrounds a chance to see and engage with one another, could that be a catalyst to the breakdown of the biases in our heads? My intervention aims to take a ground-up approach to understand ideas of the ‘social', methods of interaction and methods of expression, to trigger a dialogue between people across their respective borders, whether physical or mental, and provide them with a chance to see, understand, interact and create perceptions of their own."
});
image.push({
    src: "images/34.png",
    img2: "modalimg/2.1/34.jpg",
    img3: "modalimg/2.2/34.jpg",
    studentname: "STAVAN GANG",
    guidename: "JAGDISH JANI",
    thesisquestion: "Where does sports stand in context to city’s growth?",
    title: "<br>Sports Infrastructure",
    topic: "Energy Equation",
    modalbg: "rgba(94, 136, 172, 0.9)",
    tags: "#cultural hub | #symbiosis",
    desc: "Sports play a vital role in the country's cultural and urban growth. Sports have occupied space in urban areas of all types, from structured stadiums to informal venues. Mega-events like Olympics bring in the opportunity for cities to grow. The Olympic town can sustain itself if integrated well with the culture and social life of the local community. Public-driven informal events have shown the importance of connecting land, culture, and economy for functioning of sports in a city. Sports is more sustainable in our urban fabric when superimposed with cultural and social activities."
});


function getRandomNumber(min, max) {
    let totalEle = max - min + 1;
    let result = Math.floor(Math.random() * totalEle) + min;
    return result;
}

function createArrayOfNumber(start, end) {
    let myArray = [];
    for (let i = start; i <= end; i++) {
        myArray.push(i);
    }
    return myArray;
}
let numbersArray = createArrayOfNumber(0, image.length - 1);

function retRand() {
    if (numbersArray.length === 0) {
        // console.log('No more random number');
        return;
    }
    let randomIndex = getRandomNumber(0, numbersArray.length - 1);
    let randomNumber = numbersArray[randomIndex];
    numbersArray.splice(randomIndex, 1);
    return randomNumber;
}

var photo = []
var thumbs = document.getElementById('thumbs');
thumbs.innerHTML = image.map((img, i) => {
    return i <= 15 ? (
        `<div id="photo${i}" class="title section pic_cover">
                <p class="bottomcardtext" id="studentname${i}"></p>
                <p class="guidename" id="guidename${i}"></p>
                <p class="thesis"  id="thesisquestion${i}"></p>
            <div>
            <div class="filter" id="topic${i}"></div>
        <p class="mvrl" id="title${i}"></p>
    </div>
    </div>`) : "";
}).join('')

var old_html = thumbs.innerHTML;
thumbs.innerHTML = old_html + `<div class="MainText">
Pixel
</div>`;

for (var i = 0; i < image.length; i++) {
    photo.push(document.getElementById(`photo${i}`));
}

let ggrand = [];
for (var i = 0; i < 16; i++) {
    ggrand.push({ index: retRand(), item: photo[i], studentnameid: i, guidenameid: i, thesisquestion: i, title: i, topic: i, desc: i, imgcover: i, tags: i, modalbg: i, modalquestion: i });
}

for (var i = 0; i < ggrand.length; i++) {
    // console.log(ggrand[i]);
    // console.log(document.getElementById(`studentname${i}`));
    // console.log(image[ggrand[i].index]);
    ggrand[i].item.style.backgroundImage = `url(${image[ggrand[i].index].src})`;
    document.getElementById(`studentname${i}`).innerHTML = image[ggrand[i].index].studentname;
    document.getElementById(`guidename${i}`).innerHTML = image[ggrand[i].index].guidename;
    document.getElementById(`thesisquestion${i}`).innerHTML = image[ggrand[i].index].thesisquestion;
    document.getElementById(`title${i}`).innerHTML = image[ggrand[i].index].title;
    // document.getElementById(`topic${i}`).innerHTML = image[ggrand[i].index].topic;
    document.getElementById(`thesisquestion${i}`).style.color = image[ggrand[i].index].modalbg;
    document.getElementById(`topic${i}`).style.backgroundColor = image[ggrand[i].index].modalbg;
    // document.getElementById(`imgcover${i}`).style.backgroundImage = 'url("' + image[ggrand[i].index].src + '")';
}

function showmodal(ind) {
    console.log(ind);
    console.log(document.getElementById("imgcover"));
    console.log(ind);
    var modal = document.getElementById("modal");
    page.style.display = "block";
    modal.style.display = "block";
    document.getElementById(`topic`).innerHTML = image[ggrand[ind].index].title;
    document.getElementById(`imgcover`).style.backgroundImage = 'url("' + image[ggrand[ind].index].src + '")';
    document.getElementById(`modalquestion`).innerHTML = image[ggrand[ind].index].thesisquestion;
    document.getElementById(`tags`).innerHTML = image[ggrand[ind].index].tags;
    document.getElementById(`description`).innerHTML = image[ggrand[ind].index].desc;
    document.getElementById(`student`).innerHTML = image[ggrand[ind].index].studentname;
    document.getElementById(`guidename`).innerHTML = image[ggrand[ind].index].guidename;
    document.getElementById(`modal`).style.backgroundColor = image[ggrand[ind].index].modalbg;
    document.getElementById(`bgcolor`).style.backgroundColor = image[ggrand[ind].index].modalbg;
    document.getElementById(`img2`).src = image[ggrand[ind].index].img2;
    document.getElementById(`img3`).src = image[ggrand[ind].index].img3;
    document.getElementById(`img4`).src = image[ggrand[ind].index].img4;
}

function closemodal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
    var page = document.getElementById("page");
    page.style.display = "none";
}


var b = document.getElementsByTagName("body")[0];

b.addEventListener("mousemove", function(event) {
    parallaxed(event);

});

function parallaxed(e) {
    var amountMovedX = (e.clientX * -0.6 / 8);
    var amountMovedY = (e.clientY * -0.6 / 8);
    var x = document.getElementsByClassName("boxy");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.transform = 'translate(' + amountMovedX + 'px,' + amountMovedY + 'px)'
    }
}