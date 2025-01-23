import { Django } from "../classes/Django.class";
import { Framework } from "../classes/Framework.class";
import { FrameworkAbstractFactory } from "../interface/Framework.factory.interface";

export class DjangoFactory implements FrameworkAbstractFactory {
    private language: string;
    private version: string;
    private documentationURL: string;

    constructor(languge: string, version: string, documentationURL: string) {
        this.language = languge
        this.version = version
        this.documentationURL = documentationURL
    }

    createFramework(): Framework {
        return new Django(this.language, this.version, this.documentationURL);
    }

}