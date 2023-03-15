import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Adicione as traduções em diferentes idiomas aqui
const resources = {
  en: {
    translation: {
      welcomeMessage: "Welcome to the Computer Department of UFSCar!",
      selectOption: "Select an option",
      mapTitle: "Department Map",
      extensionGroupsTitle: "Extension Groups",
      DcRobot: "DC Robot",
      ButtonBegin: "Tap here to start",
      Auditorium:"Auditorium",
      TechnicalSupport:"Technical Support",
      Bathrooms:"Bathrooms",
      Kitchen:"Kitchen",
      Management:"Management",
      Reception:"Reception",
      Reunions:"Reunions",
      Graduation:"Graduation",
      TCati:"CATI Jr is the junior company of the Engineering and Computer Science courses at UFSCar. We focus on projects with high impact on society, for real customers, giving the experience of the job market to our members. Our portfolio consists of systems , applications, websites and we offer consultancy in the area of ​​computing. Currently we have already developed systems for Genau, a language school in São Carlos, SonicWall, an international company, and for the Hotel Resort Santa Clara. In addition to applications for Rádio UFSCar and consultancy for the popular course at UFSCar Lagoa do Sino. We have also developed our own products, such as a system for buying/selling events and managing athletics.",
      TGamso:"Game, Art, Music and Software (GAMSo) is the game development group at UFSCar, idealized by a student of the Bachelor of Science in Computer Science course in 2019 and with the participation of students from both the Department of Computing and other departments at UFSCar. The objective of the group is to encourage creativity around games from the development, the creation of game design and stories, the design of the arts or the creation of a soundtrack, either with the sharing of ideas, with classes and lectures at weekly meetings or short courses aimed at the entire community of São Carlos. In addition, Game Jams are periodically held to train Members and, once completed, the games are shown at events at the Department of Computing.",
      TMu:"The Study Group Marathon at UFSCar (M@U), is the result of the interest of several undergraduate students in deepening their knowledge in Computing. For this, we participate in the Programming Marathon, a competition with Regional, National and and Worldwide. Through weekly meetings and simulations, we explore different subjects of Computer Science and Engineering. Thus, the study for the Marathon is in line with the knowledge that a computing professional should have. In fact, several technology companies they apply questions similar to the Marathon in their selection processes or even promote their own competitions, such as the Facebook Hacker Cup and the Google Code Jam. In this way, Marathon members are already training for the selection processes of this type of company. want to understand what this has to do with Programming and Computer Science or still want to share your discoveries, come be M@U with us.",
      TPETBCC:"The PET group of the Bachelor's Degree in Computer Science (PET-BCC) at the Federal University of São Carlos (UFSCar), São Carlos campus, began its activities in October 2009 when it was included in lot 2 of public notice no. 05. of this public notice is that the call was for thematic groups, that is, in addition to being linked to an undergraduate course, they should also have a theme to guide their activities and projects. The PET-BCC theme is software development.",
      TPETENC:"The Computer Engineering PET at the Federal University of São Carlos was created in 2008, becoming active in 2009 to support academic activities that integrate teaching, research and extension, with the main objective of disseminating and adding value to the course. Based on technical research and mapping of problem situations, the group organizes lectures, events and short courses with the objective of informing and showing the public the main focuses of the course in the labor market. of project management, defined by the principles of the Project Management Institute (PMI), being allied to the specific focus of the course at UFSCar – Automation and Control –- and, thus, mappings of problem situations involving computational automation solutions in industries are carried out. In addition to problem situations, the group is responsible for carrying out technical research involving different types of tools. tools, languages ​​and knowledge about hardware, always focused on concepts applicable in automation and control systems. Among the topics addressed, Petri Nets, Fuzzy Logic and Genetic Algorithms stand out.",
      TPyLadies:"The PyLadies São Carlos group was made official on November 15, 2014 by UFSCar computing students. It is currently formed by about 60 members from the most diverse areas of knowledge (human, biological and exact). majority female, but there is also a small portion of male members, who understand the established causes and are committed to helping. The group's mission is to encourage the entry of more women into programming areas, in addition to maintaining an active and diverse community of Python. For this, PyLadies São Carlos works in schools teaching programming in a playful way to high school girls, to encourage them to enter this area and break stereotypes related to rationality, in addition to offering short courses and lectures on the most varied subjects for the population in general and participating in technology events and workshops.",
      TSecomp:"The Academic Week of Computing at the Federal University of São Carlos (SECOMP UFSCar) arose from the need to bring subjects that were of interest to both the academic community and enthusiasts. mobilize to carry out this great event, in which people from different related areas are invited to present, discuss and debate experiences and news that will bring information, knowledge and innovation to the participants. the most up-to-date possible and that are transmitted in the most dynamic way, trying to bring the participant closer to areas ranging from academia to the job market through short courses, workshops, technical and business lectures, round tables, recruitment fairs, programmers' challenges and many other contents that were thought of throughout our editions, looking for an even better event!",

      
      
    },
  },
  pt: {
    translation: {
      welcomeMessage: "Bem-vinde ao Departamento de Computação da UFSCar!",
      selectOption: "Selecione a opção desejada",
      mapTitle: "Mapa do DC",
      extensionGroupsTitle: "Grupos de Extensão",
      DcRobot: "Robô do DC",
      ButtonBegin: "Toque aqui para iniciar",
      Auditorium:"Auditório",
      TechnicalSupport:"Suporte",
      Bathrooms:"Banheiros",
      Kitchen:"Copa",
      Management:"Chefia",
      Reception:"Recepção",
      Reunions:"Reuniões",
      Graduation:"Graduação",
      TCati:"A CATI Jr é a empresa júnior dos cursos de Engenharia e Ciência da Computação da UFSCar. Focamos em projetos com alto impacto na sociedade, para clientes reais, dando a experiência de mercado de trabalho para nossos membros. Nosso portfólio consiste em sistemas, aplicativos, sites e oferecemos consultoria na área da computação. Atualmente já desenvolvemos sistemas para a Genau, escola de idiomas em São Carlos, SonicWall, empresa internacional, e para o Hotel Resort Santa Clara. Além de aplicativos para a Rádio UFSCar e consultoria para o cursinho popular da UFSCar Lagoa do Sino. Também desenvolvemos produtos próprios como um sistema de compra/venda de eventos e gerenciamento de atléticas.",
      TGamso:"Game, Art, Music and Software (GAMSo) é o grupo de desenvolvimento de jogos da UFSCar, idealizado por um aluno do curso de Bacharelado em Ciência da Computação em 2019 e com participação de alunos tanto do Departamento de Computação, quanto de outros diversos departamentos da UFSCar. O objetivo do grupo é incentivar a criatividade acerca de jogos a partir do desenvolvimento, da criação do game design e histórias, do desenho das artes ou da criação de uma trilha sonora, seja com o compartilhamento de ideias, com aulas e palestras nas reuniões semanais ou minicursos voltados à toda a comunidade de São Carlos. Além disso, periodicamente são realizadas Game Jams para treinamento dos integrantes e, após finalizados, os jogos são mostrados em eventos no Departamento de Computação.",
      TMu:"O Grupo de Estudos Maratona at UFSCar (M@U), é o resultado do interesse de vários alunos de Graduação em aprofundar seus conhecimentos na Computação. Para isso, nós participamos da Maratona de Programação, uma competição com fases Regional, Nacional e Mundial. Por meio de reuniões semanais e simulados, nós exploramos diferentes assuntos da Ciência e da Engenharia de Computação. Assim, o estudo para a Maratona está alinhado com o conhecimento que um profissional de computação deve ter. De fato, várias empresas de tecnologia aplicam questões do mesmo estilo da Maratona em seus processos seletivos ou mesmo promovem suas próprias competições, como o Facebook Hacker Cup e o Google Code Jam. Dessa forma, os membros da maratona já estão treinando para os processos seletivos desse tipo de empresa. Se você quiser entender o que isso tem a ver com Programação e Ciência da Computação ou ainda quiser compartilhar suas descobertas, venha ser M@U com a gente.",
      TPETBCC:"O grupo PET do curso de Bacharelado em Ciência da Computação (PET-BCC) da Universidade Federal de São Carlos (UFSCar), campus São Carlos, iniciou suas atividades em outubro de 2009 ao ser contemplado no lote 2 do edital nº 05. Uma particularidade desse edital é que a chamada foi para grupos temáticos, isto é, além de estarem vinculados a um curso de graduação, também deveriam ter um tema para nortear suas atividades e projetos. O tema do PET-BCC é desenvolvimento de software.",
      TPETENC:"O PET da Engenharia de Computação da Universidade Federal de São Carlos foi criado em 2008, entrando em atividade em 2009 para apoiar atividades acadêmicas que integram ensino, pesquisa e extensão, tendo como principal objetivo difundir e agregar valor ao curso. Baseado em pesquisas técnicas e mapeamento de situações problemas, o grupo organiza palestras, eventos e minicursos com o objetivo de informar e mostrar ao público os principais focos do curso no mercado de trabalho.Buscando sempre aprimorar os resultados obtidos, o PET EnC baseia sua organização em técnicas de gerenciamento de projetos, definidas pelos princípios do Project Management Institute (PMI). Estando aliado ao foco específico do curso na UFSCar ­­– Automação e Controle –- e, assim, são realizados mapeamentos de situações problema que envolvam soluções de automação computacionais em indústrias. Além das situações problema, o grupo é responsável por realizar pesquisas técnicas envolvendo diferentes tipos de ferramentas, linguagens e conhecimento sobre hardware, sempre voltado para conceitos aplicáveis em sistemas de automação e controle. Dentre os assuntos abordados, destacam-se Redes de Petri, Lógica Fuzzy e Algoritmos Genéticos.",
      TPyLadies:"O grupo PyLadies São Carlos foi oficializado no dia 15 de Novembro de 2014 por alunas da computação da UFSCar. Atualmente, é formado por cerca de 60 membros das mais diversas áreas do conhecimento (humanas, biológicas e exatas). É composto por maioria feminina, mas também há uma parcela pequena de membros homens, os quais entendem as causas firmadas e se comprometem a ajudar. A missão do grupo é incentivar a entrada de mais mulheres às áreas de programação, além de manter uma comunidade ativa e diversificada do Python. Para isso, o PyLadies São Carlos atua em escolas ensinando programação de maneira lúdica às meninas do ensino médio, para incentivá-las a entrarem nessa área e quebrar estereótipos relacionados à racionalidade, além de oferecer minicursos e palestras dos mais variados assuntos para a população no geral e participando em eventos de tecnologia e oficinas.",
      TSecomp:"A Semana Acadêmica da Computação da Universidade Federal de São Carlos (SECOMP UFSCar) surgiu da necessidade de trazer assuntos que fossem de interesse tanto da comunidade acadêmica quanto de entusiastas. A cada ano, alunos da graduação dos cursos do Departamento de Computação se mobilizam para realizar este grande evento, no qual pessoas de diferentes áreas relacionadas são convidadas a apresentar, discutir e debater experiências e novidades que trarão informações, conhecimentos e inovação aos participantes. Atualmente, em nossa décima edição, a SECOMP trabalha para que os assuntos sejam os mais atuais possíveis e que sejam transmitidos da maneira mais dinâmica, tentando aproximar o participante de áreas que vão da academia até o mercado de trabalho através de minicursos, workshops, palestras técnicas, empresariais, mesas redondas, feiras de recrutamento, desafio de programadores e muitos outros conteúdos que foram pensados ao longo de nossas edições, em busca de um evento cada vez melhor!",


      
    },
  },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: 'pt', // Defina o idioma padrão
  interpolation: {
    escapeValue: false, // React já faz isso automaticamente
  },
});

export default i18n;