export const NavBar = {
    mainNav : "fixed flex justify-between items-center py-4 px-6 sm:px-10 w-full top-0 left-0 z-50 bg-gray-800 backdrop:blur-md shadow-md",
    myLogoDiv : "flex flex-col md:flex-row text-white gap-2 items-center justify-center",
    logo : "w-[50px] bg-white p-1 rounded-full h-[50px]",
    mainName : "font-bold text-2xl",
    
    //Links + CTA buttons
    mainDiv : " font-medium hidden md:flex justify-center items-center gap-8",
    link : "text-gray-300 hover:text-gray-400 hover:underline ",
    downloadCVBtn : "bg-teal-500 hover:bg-teal-700 text-white px-4 py-2 rounded-xl transition",

    //Mobile Menu
    menuBtn : "text-3xl text-white md:hidden",
    menuMainDiv : "absolute top-16 right-4 bg-transparent  backdrop-blur-md flex flex-col items-start gap-4 px-8 py-6 rounded-lg shadow-lg md:hidden",
    menuLinks : "text-gray-300 hover:text-gray-400 hover:underline uppercase",
    menuCVBtn : "bg-teal-500 hover:bg-teal-700 text-white px-4 py-2 rounded-xl transition"
}

export const FooterStyle = {
    mainFooter : "bg-gray-800 px-32 py-10 mx-auto",
    mainDiv : "flex flex-col md:grid lg:grid-cols-3",
    logoDiv : "flex flex-col items-start justify-center border-r-2 border-gray-600",
    logo : "mb-3 w-[80px] bg-white p-1 rounded-full h-[80px]",
    name : "text-2xl font-semibold text-white mb-3",
    profession : "text-2xl text-gray-200 ",

    //Quick Links 
    linksDiv : "flex items-center justify-center  border-r-2 border-gray-600 px-5",
    linksList : "grid grid-cols-1 md:grid-cols-2 text-xl text-gray-400 md:gap-8 lg:gap-10 gap-3 mx-auto mb-4",
    link : "hover:text-teal-400 transition",

    //Social Icons with links
    LinksMainDiv : "flex flex-col items-start justify-center",
    LinksDiv : "grid grid-cols-2 text-xl text-gray-400 md:gap-8 lg:gap-10 gap-3 mx-auto mb-4",
    socialLink : "hover:text-teal-400",

    //Bottom Line
    line : "max-w-3xl text-gray-300 text-xl text-center mx-auto mt-16"

}

///// HOME PAGE PREVIEW SECTIONS

// hero
export const heroSection = {
    mainSection : "lg:h-screen h-auto p-4 flex gap-8 lg:gap-4 items-center justify-between flex-col-reverse lg:flex-row md:justify-center pt-9 px-6 md:px-12 bg-[#0F172A] mt-20 md:mt-0",

    texualSection : "lg:w-1/2 w-full flex flex-col justify-center lg:justify-start items-center lg:items-start mt-3",
    heading : "text-xl lg:text-start text-center md:text-2xl text-gray-300 mb-3 ",
    name : "text-teal-400 font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent",
    subHeading : " text-center lg:text-start text-3xl md:text-5xl font-bold text-white mb-4",
    description : "text-gray-400 max-w-lg leading-relaxed mb-6 text-center lg:text-start",
    BtnDiv : "flex justify-center items-center gap-4 mt-5",
    hireBtn : "bg-gradient-to-r from-teal-500 to-blue-600 rounded-xl px-8 py-3 text-white font-medium hover:scale-105 transition-transform duration-300",
    viewProjectsBtn : "border border-teal-500/30 text-teal-400 px-8 py-3 font-medium hover:scale-105 transition-transform rounded-xl hover:bg-teal-500 hover:text-white duration-300 ",

    imageSection : "mt-[30px] lg:mt-2",
    image : "w-60 md:w-[300px]  rounded-2xl shadow-lg object-cover hover:scale-105 transition-transform duration-500"
}

// about preview
export const About = {
    mainSection : "bg-[#0F172A] p-20 mx-auto ",
    mainDiv : "flex flex-col items-start md:items-center justify-center",
    primaryHeading : "text-4xl md:text-5xl font-bold text-white mb-4",
    headingBottomLine : " w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mb-3",
    secondaryHeading : "text-xl md:text-2xl text-teal-400 font-semibold mb-3",
    description : "text-gray-400 text-start md:text-center max-w-4xl leading-relaxed",
    learnMoreBtn : "bg-gradient-to-r from-teal-500 to-blue-600 rounded-xl px-8 py-3 text-white mt-5 font-medium hover:scale-105 transition-transform duration-300"
}

// skills preview 
export const Skill = {
    mainSection : "bg-[#0F172a] p-20 mx-auto",
    mainDiv : "flex flex-col justify-center items-start md:items-center",
    primaryHeading : "text-4xl md:text-5xl font-bold text-white mb-4",
    secondaryHeading : "text-teal-400 text-xl md:text-2xl mt-3 font-semibold",
    bottomLine : " w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mb-3",
    description : "text-gray-400 text-start md:text-center mt-4 mx-w-2xl",
    skillGrid : "flex flex-wrap justify-start md:justify-center gap-5 mt-5",
    skill : "px-6 py-4 bg-[#1E293B] text-gray-300 rounded-xl border border-[#334155] hover:border-teal-500 hover:text-teal-400 transition-all duration-300 ",
    btn : "bg-gradient-to-r from-teal-500 to-blue-600 rounded-xl mt-10 px-8 py-3 text-white font-medium hover:scale-105 transition-transform duration-300"
}

// projects preview 
export const ProjectsP = {
    mainSection : "bg-[#0F172A] py-20 px-24 mx-auto ",
    mainDiv : "flex flex-col items-center justify-center",
    primaryHeading : "text-4xl md:text-5xl text-white font-bold mb-5",
    bottomLine : "w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-600 mb-4",
    secondaryHeading : "text-xl text-center md:text-2xl text-teal-400 font-semibold my-3",
    projectsGrid : "grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7",
    projectDiv : "bg-[#1E293B] rounded-xl border hover:border-teal-500 p-5 hover:scale-105 hover:shadow-[0_0_20px_rgba(13, 148, 136, 0.3)] ",
    projectTitle : "text-xl md:text-2xl font-semibold text-center text-gray-200 my-4",
    projectDesc : "text-gray-400 text-center my-5",
    tagsDiv : "flex flex-wrap justify-center items-center gap-4 mt-3",
    tag : "text-xs font-semibold text-teal-400 border border-teal-500/30 px-3 py-1 rounded-xl",
    btn : "bg-gradient-to-r from-teal-500 to-blue-600 rounded-xl mt-10 px-8 py-3 text-white font-medium hover:scale-105 transition-transform duration-300"
    
}

// contact pre section
export const Contact = {
    mainSection : "bg-[#0F172A] p-24 mx-auto",
    mainDiv : "flex flex-col justify-center items-center",
    heading : "text-3xl md:text-5xl text-white font-bold mb-3",
    description : "text-gray-400 text-xl max-w-4xl text-center mb-4",
    btnsDiv : "flex justify-center items-center gap-4 mt-5",
    contactBtn : "bg-gradient-to-r from-teal-500 to-blue-600 rounded-xl px-8 py-3 text-white font-medium hover:scale-105 transition-transform duration-300",
    hireBtn : "border border-teal-500/30 text-teal-400 px-8 py-3 font-medium hover:scale-105 transition-transform rounded-xl hover:bg-teal-500 hover:text-white duration-300 "
}


///// Pages COMPONENTS

/// About Page Components

//about intro
export const AboutIntroduction = {
    mainSection : "lg:h-screen h-auto p-4 flex gap-10 lg:gap-6 items-center justify-between flex-col-reverse lg:flex-row md:justify-center pt-9 px-6 mx-auto md:px-12 bg-[#0F172A]",
    //textual info 
    Div1 : "lg:w-1/2 w-full flex flex-col justify-items-center lg:justify-start items-center lg:items-start mt-3",
    mainHeading : "text-4xl md:text-5xl font-bold text-white mb-3",
    bottomLine : "w-44 h-1 bg-gradient-to-r from-teal-400 to-blue-600",
    subHeading : "text-xl text-center md:text-start md:text-2xl font-semibold text-teal-400 my-3",
    description : "text-gray-400 leading-relaxed mb-6 text-center lg:text-start",
    //image
    Div2 : "mt-[30px] lg:mt-2",
    image : "w-60 md:w-[300px]  rounded-2xl shadow-lg object-cover hover:scale-105 transition-transform duration-500"
}

// journey section
export const JourneySection = {
    mainSection : "bg-[#0F172A] p-24 mx-auto",
    mainDiv : "flex flex-col justify-center items-center",
    mainHeading : "text-4xl md:text-5xl text-white mb-5 font-bold",
    journeyGrid : "grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7",
    JDiv : "bg-[#1E293B] rounded-xl border hover:border-teal-500 p-5 hover:scale-105 text-center ",
    year : "text-2xl font-bold md:text-4xl text-gray-200 my-4 ",
    learning : "text-xl font-semibold text-teal-400 mb-4",
    description : "text-[16px] text-gray-400"
}

// vision & mission section 
export const Vision_Mission = {  
    mainSection : "p-24 bg-[#0F172A]",
    mainDiv : 'flex flex-col justify-between items-center',
    mainHeading : 'text-4xl md:text-5xl font-bold text-white mb-4',
    subDiv : 'flex gap-6',
    Divs : 'text-center border w-[50%] hover:border-teal-400 hover:scale-105 p-5 rounded-xl',
    Headings : 'text-2xl md:text-3xl font-semibold text-teal-400 my-3'
    
}

// CTA Section
export const AboutCTA = {
    mainSection : "p-24 bg-[#0F172A]",
    mainDiv : 'flex flex-col items-center justify-center',
    mainHeading : 'text-4xl md:text-5xl text-white mb-4 font-bold',
    text1 : 'text-xl md:text-2xl text-gray-400 font-semibold',
    text2 : "text-xl text-gray-400",
    btnDiv : "flex justify-center items-center gap-4 mt-5",
    cvBtn : 'bg-gradient-to-r from-teal-500 to-blue-600 rounded-xl px-8 py-3 text-white font-medium hover:scale-105 transition-transform duration-300',
    hireBtn : 'border border-teal-500/30 text-teal-400 px-8 py-3 font-medium hover:scale-105 transition-transform rounded-xl hover:bg-teal-500 hover:text-white duration-300 "'
}

/// Skill Page Components

// skills header 
export const skillHeader = {
    mainDiv : "flex flex-col items-start md:items-center justify-center",
    mainHeading : "text-3xl md:text-5xl font-semibold text-gray-200 mb-4",
    subHeading : "text-xl md:text-2xl font-semibold text-teal-400 mt-4 md:text-center",
    description : "text-xl md:text-center text-gray-400 my-4 max-w-3xl"

}

//skills Grid 
export const skillgrid = {
    mainDiv : "flex flex-col items-center justify-center",
    mainHeading : "text-3xl md:text-5xl text-gray-200 font-semibold mb-4",
    description : "text-gray-500 md:text-xl text-center max-w-3xl mt-4",
    SGrid : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5",
    skillDiv : "flex flex-col item-start md:items-center justify-center p-4 border hover:border-teal-400 m-3 rounded-xl bg-[#1E293B] ",
    skillHeading : "text-xl font-semmibold text-teal-300 mb-2",
    skillDescription : "text-gray-500 text-start md:text-center",
    finishLine : "mt-5 text-xl text-center mb-7 text-teal-100 ",
    Btn : "bg-gradient-to-r from-teal-500 to-blue-600 rounded-xl px-8 py-3 text-white font-medium hover:scale-105 transition-transform duration-300"
}