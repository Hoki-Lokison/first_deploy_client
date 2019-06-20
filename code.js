var app = new Vue({
  el: "#app",

  data: {
    greeting: "",
    user:"",
    age: 0,
    date_created: 0,
  },
  created:function () {
    this.loadName();
  },


  methods: {
    loadName: function () {
      var req_body = {
        name: this.user,
        age: this.age
      };
      fetch(`$( url )`, {
        method: "POST",
        headers:{
          "Content-type": "application/json"
        },
        body: JSON.stringify(req_body)
      }).then(function (response) {
        response.json().then(function (data) {
          app.user = data.name;
          app.age = data.age;
          app.date_created = data.created_on;
          app.loadGreeting();
        });
      });
    },
      loadGreeting: function () {
        fetch(`$( url )`).then(function (response) {
        response.json().then(function ( data ) {
          app.greeting = data.greeting;
        });
      });

    },
  },

  computed: {

  },
});
