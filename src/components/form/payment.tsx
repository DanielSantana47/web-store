import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export const Payment = ()=> {
    return(
        <RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="credit-card" id="credit-card" />
                <Label htmlFor="option-one">Credit Card</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="pix" id="pix" />
                <Label htmlFor="pix">Pix</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="Boleto" id="Boleto" />
                <Label htmlFor="Boleto">Boleto</Label>
            </div>
        </RadioGroup>

    )
}
