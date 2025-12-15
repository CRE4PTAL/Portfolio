function naglowek(loc){
    let tytuly = ["Strona Główna", "Technologie", "Portfolio", "Certyfikaty", "Kontakt"];
    let adresy = ["index.html", "technologie.html", "portfolio.html", "certyfikaty.html", "kontakt.html"];

    loc = loc.substring(loc.lastIndexOf('/')+1);
    document.write(
    '<nav class="navbar navbar-expand-lg navbar-dark bg-dark">' +
        '<div class="container-fluid">' +
            '<span class="navbar-brand">Błażej Goliszek</span>' +
            '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">' +
                '<span class="navbar-toggler-icon"></span>' +
            '</button>' +
            '<div class="collapse navbar-collapse" id="navbarNav">' +
                '<ul class="navbar-nav">'
                    );
                    for(let i = 0; i < adresy.length; i++){
                        document.write(
                            '<li class="nav-item">' +
                            '<a class="nav-link'
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

