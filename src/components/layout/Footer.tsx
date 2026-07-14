import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-10">
      <Container>
        <div className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} JobFlow. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}