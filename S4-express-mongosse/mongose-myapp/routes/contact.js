var express = require("express");
var router = express.Router();
var Contact = require("../models/contact");

router.get("/", function (req, res, next) {
  Contact.find((err, contacts) => {
    res.render( "form.twig" , 
    {
      title: "Contact list",
      con: contacts,
    });
  });
});
/*
router.delete('/contact/delete/:id',function (req, res, id){
  id = req.params.id;
  Contact.remove(id);
  res.redirect("/contact/");

});
*/

router.post("/", function (req, res){
    new Contact ({
        FullName : req.body.FullName,
        Phone : req.body.Phone
    }).save(
        (err, newcontact)=>{
            if(err)
            {
                console.log("error message :"+err);
            }
            else
            {
                console.log(newcontact);
                res.redirect("/contact/");
            }
        }
    );
});

/*router.get("/:id", function (req, res, next) {
    Contact.findById((err, contact) => {
      res.render( "form.twig" , 
      {
        id : req.params.id,
        con: contact,
      });
      console.log(id+" "+con);
    });
  });
  */
/*
  
  router.delete('/:id', function(req, res, next){
    Contact.findByIdAndRemove(
      req.params.id,
      
      function (err, contact){
          if(err)
          console.log(err);
          else 
          res.send('contact deleted');
      }
    )
});

  
  router.put('/:id', function(req, res, next){
      Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        function (err, contact){
            if(err)
            console.log(err);
            else 
            res.json(req.body);
        }
      )
  });


//UI UPDATE CONTACT
router.post('/update/affiche/:id', function(req, res, next){
  Contact.findById(
    req.params.id,
    function (err, contact){
        if(err)
        console.log(err);
        else 
        res.render('form-update.twig',
         {
           title: "Update contact ",
            cont: contact
          }
         );
    }
  )
});

*/
router.post('/delete/:id', function(req, res, next){
  Contact.findByIdAndRemove(
    req.params.id,
    
    function (err, contact){
        if(err)
        console.log(err);
        else 
        res.redirect('/contact');
    }
  )
});
module.exports = router;
