import api from "@/api/api";
import axios from "axios"
import { ref } from "vue"

const getPromotions = () => {
    const promotions = ref([]);
    const errors = ref('');

    const load = async() => {
        try {
            const res = await axios.get(api.getPromotions);
            if (res.status === 404) {
                throw new Error("page not found");
            }

            promotions.value = res.data.promotions;

        } catch (err) {
            errors.value = err.message;
        }
    }

    return { promotions, errors, load };
}

export default getPromotions;