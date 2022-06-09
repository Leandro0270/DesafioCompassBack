import faker from 'faker'

faker.setLocale('pt_BR')

export class FactoryInfo{

    static gerarDadosUser(){
        return {
                    name: faker.name.findName(),
                    email: faker.internet.email(),
                    gender: faker.random.arrayElement(["male","female"]),
                    status: "active"
                }
    }


}