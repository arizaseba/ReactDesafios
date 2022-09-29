import { Button, Form, FormLabel, InputGroup } from "react-bootstrap"
import '../../css/ItemDetail.css';

const ItemCount = ({ item, count, setCount }) => {
    return (
        <div className="my-3">
            <InputGroup>
                <Button variant="dark" onClick={() => { count > 1 && setCount(count - 1) }}>-</Button>
                <FormLabel className="border d-flex align-items-center justify-content-center m-0 px-4">{count}</FormLabel>
                <Button variant="dark" className="text-center" onClick={() => { count < item.stock && setCount(count + 1) }}>+</Button>
            </InputGroup>
            <Form.Text className="text-muted">{item.stock} disponibles</Form.Text>
        </div>
    )
}

export default ItemCount