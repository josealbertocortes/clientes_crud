import axios from 'axios'

export const addCLient = (form,setErrorsForm,setShowAddClient, setRefresh, setError)=>{

    let thereWasError = false;
    if(form.lastname==="" ){

      setErrorsForm(e=>{

        return {
          ...e,
          lastname: true
        }
      });

      thereWasError=true
    }

    if(form.name==="" ){
      setErrorsForm(e=>{

        return {
          ...e,
          name: true
        }
      });

      thereWasError=true
    }

    if(form.email==="" ){
      setErrorsForm(e=>{

        return {
          ...e,
          email: true
        }
      });

      thereWasError=true
    }

    if(form.telephone==="" ){
      setErrorsForm(e=>{

        return {
          ...e,
          telephone: true
        }
      });

      thereWasError=true
    }

    if(form.age===0 ){
      setErrorsForm(e=>{

        return {
          ...e,
          age: true
        }
      });

      thereWasError=true
    }

    if(form.status==="" ){
      setErrorsForm(e=>{

        return {
          ...e,
          status: true
        }
      });

      thereWasError=true
    }


    if(thereWasError){

    }else{
      axios
      .post("http://127.0.0.1:8000/api/clients/", form)
      .then(function (response) {
        setShowAddClient(false);
        setRefresh((c) => !c);
        setError(false)
        setErrorsForm({
          name:false,
          lastname:false,
          email:false,
          telephone:false,
          age:false,
          status:false
        })
      })
      .catch(function (error) {
        setError(true)
      });
    }
}