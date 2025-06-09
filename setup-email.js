// Script para configurar o envio de emails
// Para implementar o envio real de emails, siga estes passos:

console.log("=== Configuração de Email ===")
console.log("Para implementar o envio real de emails, você precisa:")
console.log("")
console.log("1. Instalar o Resend (recomendado):")
console.log("   npm install resend")
console.log("")
console.log("2. Criar uma conta no Resend (https://resend.com)")
console.log("")
console.log("3. Adicionar a variável de ambiente:")
console.log("   RESEND_API_KEY=sua_chave_aqui")
console.log("")
console.log("4. Atualizar o arquivo app/api/contact/route.ts:")
console.log(`
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: 'contato@seudominio.com',
      to: ['wn.analytics.24@gmail.com'],
      subject: \`Nova mensagem de \${name}\`,
      html: \`
        <h2>Nova mensagem do site</h2>
        <p><strong>Nome:</strong> \${name}</p>
        <p><strong>Email:</strong> \${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>\${message}</p>
      \`
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
`)
console.log("")
console.log("5. Configurar um domínio verificado no Resend")
console.log("")
console.log("Alternativas ao Resend:")
console.log("- SendGrid")
console.log("- Nodemailer com Gmail")
console.log("- EmailJS (frontend)")
