import prismaClient from "../prisma";

interface DeleteCustomerProps{
    id: string;
}

class DeleteCustomerService {
    async execute({id}:DeleteCustomerProps) {
        if (!id) {
            throw new Error('id is required');
        }

        const findcustomer = await prismaClient.customer.findFirst({
            where: {
                id: id
            }
        });

        if (!findcustomer) {
            throw new Error('Customer not found');
        }

        await prismaClient.customer.delete({
            where: {
                id: findcustomer.id
            }
        });
        return {message: "Customer deleted successfully"}
}
}

export { DeleteCustomerService };