import {
  Button,
  Column,
  Hr,
  Link,
  Row,
  Section,
  Text,
} from "@react-email/components";

import EmailLayout from "@/emails/EmailLayout";

interface ContactEmailProps {
  name: string;
  company: string;
  email: string;
  service: string;
  message: string;
  submittedAt: string;
}

const labelStyle = {
  color: "#64748b",
  fontSize: "13px",
  fontWeight: 700,
  margin: "0 0 6px",
  textTransform: "uppercase" as const,
  letterSpacing: "1px",
};

const valueStyle = {
  color: "#0f172a",
  fontSize: "16px",
  fontWeight: 700,
  margin: 0,
};

export default function ContactEmail({
  name,
  company,
  email,
  service,
  message,
  submittedAt,
}: ContactEmailProps) {
  return (
    <EmailLayout
      preview={`Nueva oportunidad comercial de ${name}`}
      title="Nueva oportunidad comercial"
    >
      <Text
        style={{
          color: "#334155",
          fontSize: "16px",
          lineHeight: "26px",
          margin: "0 0 28px",
        }}
      >
        Se recibió una nueva solicitud desde el formulario de contacto de
        Aetherix.
      </Text>

      <Section
        style={{
          backgroundColor: "#f8fafc",
          border: "1px solid #e2e8f0",
          borderRadius: "16px",
          padding: "24px",
        }}
      >
        <Row>
          <Column style={{ width: "50%", paddingRight: "12px" }}>
            <Text style={labelStyle}>Nombre</Text>
            <Text style={valueStyle}>{name}</Text>
          </Column>

          <Column style={{ width: "50%", paddingLeft: "12px" }}>
            <Text style={labelStyle}>Empresa</Text>
            <Text style={valueStyle}>{company || "No especificada"}</Text>
          </Column>
        </Row>

        <Hr
          style={{
            borderColor: "#e2e8f0",
            margin: "22px 0",
          }}
        />

        <Row>
          <Column style={{ width: "50%", paddingRight: "12px" }}>
            <Text style={labelStyle}>Correo</Text>

            <Link
              href={`mailto:${email}`}
              style={{
                color: "#2563eb",
                fontSize: "16px",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              {email}
            </Link>
          </Column>

          <Column style={{ width: "50%", paddingLeft: "12px" }}>
            <Text style={labelStyle}>Servicio</Text>
            <Text style={valueStyle}>{service}</Text>
          </Column>
        </Row>

        <Hr
          style={{
            borderColor: "#e2e8f0",
            margin: "22px 0",
          }}
        />

        <Text style={labelStyle}>Fecha de envío</Text>
        <Text style={valueStyle}>{submittedAt}</Text>
      </Section>

      <Section
        style={{
          marginTop: "24px",
          backgroundColor: "#0f172a",
          borderRadius: "16px",
          padding: "24px",
        }}
      >
        <Text
          style={{
            color: "#60a5fa",
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "1px",
            margin: "0 0 12px",
            textTransform: "uppercase",
          }}
        >
          Descripción del proyecto
        </Text>

        <Text
          style={{
            color: "#e2e8f0",
            fontSize: "16px",
            lineHeight: "27px",
            margin: 0,
            whiteSpace: "pre-wrap",
          }}
        >
          {message}
        </Text>
      </Section>

      <Section style={{ marginTop: "28px", textAlign: "center" }}>
        <Button
          href={`mailto:${email}`}
          style={{
            backgroundColor: "#2563eb",
            borderRadius: "12px",
            color: "#ffffff",
            display: "inline-block",
            fontSize: "15px",
            fontWeight: 700,
            padding: "14px 24px",
            textDecoration: "none",
          }}
        >
          Responder al cliente
        </Button>
      </Section>
    </EmailLayout>
  );
}