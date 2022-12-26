export interface NavbarModel {
    contactButton: string;
    contactButtonLink: string;
    resume: string;
}

export interface HeaderModel {
    title: string;
    subtitle: string;
}

export interface Technology {
    title: string;
    technologies: string[];
}

export interface Feature {
    title: string;
    subtitle: string;
    technology: Technology;
}

export interface AboutMeModel {
    title: string;
    subtitle: string;
    subtitle2: string;
    features: Feature[];
}

export interface RecentWork {
    title: string;
    subtitle: string;
    actionLink: string;
    imageLink: string;
}

export interface RecentWorkModel {
    title: string;
    subtitle: string;
    recentWorks: RecentWork[];
}

export interface Project {
    imageUrl: string;
    title: string;
    subtitle: string;
    actionLink: string;
}

export interface StartUpProjectsModel {
    title: string;
    subtitle: string;
    projects: Project[];
}

export interface CollabWithMeModel {
    title: string;
    subtitle: string;
    actionButtonText: string;
    actionButtonLink: string;
}

export interface FooterModel {
    logoLink: string;
    title: string;
    subtitle: string;
    actionButtonText: string;
    actionButtonLink: string;
}

export interface ContentModel {
    navbarModel: NavbarModel;
    headerModel: HeaderModel;
    aboutMeModel: AboutMeModel;
    recentWorkModel: RecentWorkModel;
    startUpProjectsModel: StartUpProjectsModel;
    collabWithMeModel: CollabWithMeModel;
    footerModel: FooterModel;
}