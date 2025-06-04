const TemplateExpressions = () => {

    const name = 'Francsco';
    /* Criando Objetos */
    const data =  {
        age : 27,
        job: 'Programador',
        city: 'Bragança, Portugal'
    }

    return (
        <div>
            <h1>Olá {name}, tudo bem consigo?</h1>
            <p>Você atua como {data.job} e estas com {data.age} anos de idade e vives na cidade de {data.city}</p>
        </div>
    );
};

export default TemplateExpressions;