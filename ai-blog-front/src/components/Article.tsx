import {
  Flex,
  Text,
  Card,
  Grid,
  AspectRatio,
  Box,
  Heading,
  Badge,
} from "@radix-ui/themes";
import { Moment } from "moment";

type Tag = {
  name: string;
  color:
    | "tomato"
    | "red"
    | "ruby"
    | "crimson"
    | "pink"
    | "plum"
    | "purple"
    | "violet"
    | "iris"
    | "indigo"
    | "blue"
    | "cyan"
    | "teal"
    | "jade"
    | "green"
    | "grass"
    | "brown"
    | "orange"
    | "sky"
    | "mint"
    | "lime"
    | "yellow"
    | "amber"
    | "gold"
    | "bronze"
    | "gray";
};

export type CardInfo = {
  author: string;
  date: Moment;
  title: string;
  titleContent: string;
  tags: Tag[];
};

type Props = {
  position: "vertical" | "horizontal";
  info: CardInfo;
};

export default function Article({ position, info }: Props) {
  const isHorizontal = position === "horizontal";
  const cardColumns = isHorizontal ? "2" : "1";

  const { author, date, title, titleContent, tags } = info;

  const UserDataHeader = () => {
    return (
      <Box mb="3">
        <Heading size="3" style={{ color: "#6941C6" }}>
          {author} • {date.format("D MMM YYYY")}
        </Heading>
      </Box>
    );
  };

  const CardDataHeader = () => {
    return (
      <Box>
        <Box mb="3">
          <Heading>{title}</Heading>
        </Box>

        <Box mb="6">
          <Text size="4" weight="light">
            {titleContent}
          </Text>
        </Box>

        <Flex gap="2">
          <>
            {tags.map((t) => (
              <Badge color={t.color} size="2" radius="full">
                {t.name}
              </Badge>
            ))}
          </>
        </Flex>
      </Box>
    );
  };

  return (
    <Card>
      <Grid columns={cardColumns}>
        <Box mb="6">
          <AspectRatio ratio={20 / 8}>
            <img
              src="https://images.unsplash.com/photo-1479030160180-b1860951d696?&auto=format&fit=crop&w=1200&q=80"
              alt="A house in a forest"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                borderRadius: "var(--radius-2)",
              }}
            />
          </AspectRatio>
        </Box>

        <Box ml={isHorizontal ? "5" : "0"}>
          <UserDataHeader />
          <CardDataHeader />
        </Box>
      </Grid>
    </Card>
  );
}
