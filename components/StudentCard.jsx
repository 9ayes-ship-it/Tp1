import kais from '../assets/kais.jpg'

const student = {
  nom: 'Kais',
  prenom: 'Salem',
  email: 'asdas@gmail.com',
  tel: '+216 56 444 199',
  filiere: 'GLSI',
  groupe: 'GLSI 2B',
  ville: 'Mahdia',
  annee: '2ème année',
}



function StudentCard() {
  return (
    <div>
      
        <div className="student-card">
          <img src={kais} alt="Student" />
          <h1>Fiche etudiant</h1>
          <p>
          <strong>nom :</strong> {student.nom}
          </p>
            <p>
          <strong>email :</strong> {student.email}
          </p>
            <p>
          <strong>Tel :</strong> {student.tel}
          </p>
            <p>
          <strong>groupe :</strong> {student.groupe}
          </p>
           <button type="button" className="cta-button">
          Contacter
        </button>
        </div>

  


       
     

      


    
      
    </div>
  )
 
    }
  


export default StudentCard;
