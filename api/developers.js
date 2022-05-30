const express = require('express');
var fetch = require('node-fetch');

const router = express.Router();

const devProfiles =  {
    'gcnit': {
        "id": "gcnit",
        "avatar_url": "https://avatars.githubusercontent.com/u/4833751?v=4",
        "name": "Gaurav Chandak",
        "company": "workat.tech",
        "blog": "https://workat.tech",
        "location": "Bangalore, India",
        "email": null,
        "bio": "Building workat.tech;\r\nPreviously Software Engineer at @Flipkart, @microsoft and @tracxn",
        "github_id": "gcnit",
        "linkedin_id": "gcnit",
        "codechef_id": "gc_nit",
        "hackerrank_id": "gcnit",
        "twitter_id": "gc_nit",
        "medium_id": "gc_nit",
        "repos": [{
            "name": "awesome-learn-to-code",
            "html_url": "https://github.com/gcnit/awesome-learn-to-code",
            "description": "A list of awesome resources for learning to code",
            "updated_at": "2020-08-12T18:21:53Z"
    }]
   },
};

const allDevs = { 'id':['gcnit'] };

router.post("/", async(req,res) => {
    const id = req.body.github_id;
    const githInfo = fetch(`https://api.github.com/users/${id}`).then(response => response.json());
    const repoInfo =  fetch(`https://api.github.com/users/${id}/repos`).then(response => response.json());

    Promise.all([ githInfo, repoInfo]).then(
        array =>{
            const rep = array[1].map( x => {
                const container ={};
                container.name = x.name;
                container.html_url = x.html_url;
                container.description = x.description;
                container.updated_at = x.updated_at;

                return container;
  
            });

            const responseData = {
                id: id,
                avatar_url: array[0].avatar_url,
                name: array[0].name,
                company: array[0].company,
                blog: array[0].blog,
                location: array[0].location,
                email: array[0].email,
                bio: array[0].bio,
                github_id: id,
                linkedin_id: req.body.linkedin_id,
                codechef_id: req.body.codechef_id,
                hackerrank_id: req.body.hackerrank_id,
                twitter_id: req.body.twitter_id,
                medium_id: req.body.medium_id,
                repos: rep

            };
            devProfiles[id] = responseData;
            allDevs['id'].push(id);
            res.status(201);
            res.send(id);
        }
    )
    .catch(err =>{
        res.status(400);
        res.send('Github UserName is Invalid!');

    });
});

router.get("/:id", (req,res) => {
    const id = req.params.id;
    if(!devProfiles[id]){
        res.status(400);
        res.send('User not found!');
    }
    else{
        res.status(200);
        res.send(devProfiles[id]);
    }

});

router.get("/",(req,res)=>{
    res.status(200);
    res.send(allDevs);

});

router.delete("/:id", (req,res)=>{
    const id = req.params.id;
    if(!devProfiles[id]){
        res.status(400);
        res.send('Resource not found!');
    }
    else{
        res.status(204);
        res.send('Deleted');
    }


});

module.exports = router;
