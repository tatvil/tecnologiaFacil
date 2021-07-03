var redesSociales=[
    {
        nombre : 'Instagram',
        url :'https://www.instagram.com/tecnologia_facil/'
    },
    
    {
        nombre: 'Facebook',
        url:'https://www.facebook.com/tecnologiafacilmadrid'
    },

    {
        nombre: 'Twitter',
        url: 'https://twitter.com/tecnofacilmad'
    }
];

var i=0;
for (i=0;i<redesSociales.length;i++ )

  {
    document.write('<p> <a href =\"'+ redesSociales[i].url + '\">' +redesSociales[i].nombre + '</a></p>');
  }