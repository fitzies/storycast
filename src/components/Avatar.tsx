import {
  AvatarTemplate,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

const Avatar = ({
  image,
  alt,
  fallback,
}: {
  image: string;
  alt: string;
  fallback: string;
}) => {
  return (
    <>
      <AvatarTemplate>
        <AvatarImage src={image} alt={alt} />
        <AvatarFallback>{fallback}</AvatarFallback>
      </AvatarTemplate>
    </>
  );
};

export default Avatar;
