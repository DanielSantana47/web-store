import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export const Payment = ()=> {
    return(
        <RadioGroup defaultValue="credit-card">
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="credit-card" id="credit-card" />
                <Label htmlFor="option-one">Credit Card</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="bank-transfer" id="bank-transfer" />
                <Label htmlFor="bank-transfer">Bank Transfer</Label>
            </div>
            <div className="flex items-center space-x-2">
                <RadioGroupItem value="mobile-payment" id="mobile-payment" />
                <Label htmlFor="mobile-payment">Mobile Payment</Label>
            </div>
        </RadioGroup>

    )
}
