import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface EmailLayoutProps {
  preview: string;
  title: string;
  children: React.ReactNode;
}

export default function EmailLayout({
  preview,
  title,
  children,
}: EmailLayoutProps) {
  return (
    <Html>
      <Head />

      <Preview>{preview}</Preview>

      <Body
        style={{
          backgroundColor: "#f8fafc",
          fontFamily:
            "Inter, Arial, Helvetica, sans-serif",
          margin: 0,
          padding: "40px 0",
        }}
      >
        <Container
          style={{
            maxWidth: "680px",
            backgroundColor: "#ffffff",
            borderRadius: "20px",
            overflow: "hidden",
            border: "1px solid #e2e8f0",
          }}
        >
          <Section
            style={{
              backgroundColor: "#2563eb",
              padding: "36px",
            }}
          >
            <Text
              style={{
                margin: 0,
                color: "#bfdbfe",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "3px",
              }}
            >
              AETHERIX
            </Text>

            <Text
              style={{
                marginTop: "12px",
                marginBottom: 0,
                color: "#ffffff",
                fontSize: "32px",
                fontWeight: 800,
              }}
            >
              {title}
            </Text>

            <Text
              style={{
                marginTop: "8px",
                marginBottom: 0,
                color: "#dbeafe",
                fontSize: "15px",
              }}
            >
              Building the Future
            </Text>
          </Section>

          <Section
            style={{
              padding: "36px",
            }}
          >
            {children}
          </Section>

          <Hr
            style={{
              borderColor: "#e2e8f0",
            }}
          />

          <Section
            style={{
              padding: "28px 36px",
            }}
          >
            <Text
              style={{
                color: "#64748b",
                fontSize: "13px",
                margin: 0,
                textAlign: "center",
              }}
            >
              © 2026 Aetherix · Building the Future
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}