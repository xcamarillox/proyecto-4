
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

const Booking1 =  (props) => 
(
    <Form>
      <h3 className="text-center">{props.isSignUpMode ? "REGISTRO" : "ACCESO"}</h3>
      { props.isSignUpMode && 
        <div>
          <Form.Group className="mb-2" controlId="nombre">
            <Form.Label>Nombre(s)</Form.Label>
            <Form.Control placeholder="Ingresa tu(s) nombre(s)" />
          </Form.Group>
          <Form.Group className="mb-2" controlId="apellido">
            <Form.Label>Apellido(s)</Form.Label>
            <Form.Control placeholder="Ingresa tu(s) apellidos(s)" />
          </Form.Group>
        </div>
      }
      <Form.Group className="mb-2" controlId="email">
        <Form.Label>E-mail</Form.Label>
        <Form.Control type="email" placeholder="Ingresa tu E-mail" />
        { props.isSignUpMode && 
        <Form.Text className="text-muted">
          No compartiremos tu correo con nadie (muy probablemente).
        </Form.Text>
        }
      </Form.Group>

      <Form.Group className="mb-2" controlId="password">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Ingresa tu Contraseña" />
      </Form.Group>
      { !props.isSignUpMode && 
      <Form.Group className="mb-2" controlId="recuerdame">
        <Form.Check type="checkbox" label="Recuerdame" />
      </Form.Group>
      }
      { props.isSignUpMode && 
      <Form.Group className="mb-2" controlId="passwordConfirm">
        <Form.Label>Confirma tu Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Confirma tu Contraseña" />
      </Form.Group>
      }
      <div className="d-grid gap-2">
        <Button type="submit" variant="primary">
          {props.isSignUpMode ? "Registrame" : "Acceder"}
        </Button>
      </div>
      <p className="forgot-password text-end">
      {props.isSignUpMode ? "Ya registrado? " : "Olvidaste tu "}<a href="#">{props.isSignUpMode ? "Accede" : "Contraseña?"}</a>
      </p>
    </Form>
)

export default Booking1