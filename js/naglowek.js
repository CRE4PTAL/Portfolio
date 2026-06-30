function naglowek(loc){
    let tytuly = ["Strona Główna", "Technologie", "Portfolio", "Certyfikaty", "Kontakt"];
    let adresy = ["index.html", "technologie.html", "portfolio.html", "certyfikaty.html", "kontakt.html"];

    loc = loc.substring(loc.lastIndexOf('/')+1);
    document.write(
    '<nav class="navbar navbar-expand-lg navbar-dark site-nav">' +
        '<div class="container-fluid site-nav__inner">' +
            '<span class="navbar-brand site-nav__brand">Błażej Goliszek</span>' +
            '<button class="navbar-toggler site-nav__toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-label="Przełącz nawigację">' +
                '<span class="navbar-toggler-icon"></span>' +
            '</button>' +
            '<div class="collapse navbar-collapse site-nav__collapse" id="navbarNav">' +
                '<ul class="navbar-nav site-nav__list">'
                    );
                    for(let i = 0; i < adresy.length; i++){
                        document.write(
                            '<li class="nav-item site-nav__item">' +
                            '<a class="nav-link site-nav__link'
                        );
                        if(loc == adresy[i]){
                            document.write(' active"');
                        }else{
                            document.write('"');
                        }
                        document.write(
                            ` href="${adresy[i]}">${tytuly[i]}</a>` +
                            '</li>'
                        );
                    }
                    document.write(
                '</ul>' +
            '</div>' +
        '</div>' +
    '</nav>')
}

