import { Field } from "../..";

export default function ClientInformation( { control, errors, isSubmitting } ) {
    return (
        <>
            <h2 className="font-bold mb-4 text-center text-orange-600 text-xl">Informações do Cliente</h2>
            <Field
                label="Nome"
                name="customerDTO.name"
                placeholder="Seu nome"
                text="text"
                control={control}
                defaultValue=""
                error={errors['customerDTO.name']}
                isSubmitting={isSubmitting}
              />
              <Field
                label="Sobrenome"
                name="customerDTO.lastName"
                placeholder="Seu sobrenome"
                text="text"
                control={control}
                defaultValue=""
                error={errors['customerDTO.lastName']}
                isSubmitting={isSubmitting}
              />
              <Field
                label="Telefone"
                name="customerDTO.phone"
                placeholder="Seu telefone"
                text="text"
                defaultValue=""
                control={control}
                error={errors['customerDTO.phone']}
                isSubmitting={isSubmitting}
              />
              <Field
                label="Idade"
                name="customerDTO.age"
                placeholder="Sua idade"
                text="text"
                control={control}
                defaultValue=""
                error={errors['customerDTO.age']}
                isSubmitting={isSubmitting}
              />
              <Field
                label="Gênero"
                name="customerDTO.gender"
                placeholder="Seu gênero"
                text="text"
                control={control}
                defaultValue=""
                error={errors['customerDTO.gender']}
                isSubmitting={isSubmitting}
              />
              <Field
                label="CPF"
                name="customerDTO.cpf"
                placeholder="Seu CPF"
                text="text"
                defaultValue=""
                control={control}
                error={errors['customerDTO.cpf']}
                isSubmitting={isSubmitting}
              />
              <Field
                label="Email"
                name="customerDTO.email"
                placeholder="Seu email"
                text="email"
                defaultValue=""
                control={control}
                error={errors['customerDTO.email']}
                isSubmitting={isSubmitting}
                rules={{
                  required: 'Campo obrigatório',
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'E-mail inválido',
                  },
                }}
              />
              <Field
                label="Senha"
                name="customerDTO.password"
                text="password"
                placeholder="Sua senha"
                defaultValue=""
                control={control}
                error={errors['customerDTO.password']}
                isSubmitting={isSubmitting}
                rules={{
                  required: 'Campo obrigatório',
                  minLength: {
                    value: 8,
                    message: 'A senha deve ter pelo menos 8 caracteres',
                  },
                }}
                />
        </>
    )
}