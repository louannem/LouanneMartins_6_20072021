fetch('https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P5+Javascript+%26+Accessibility/FishEyeData.json')
    .then(function(response){
        if(response.ok) {
            return response.json();
        }
    })
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    })