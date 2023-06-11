import { Card, CardBody, Image, Stack, Heading, Text } from "@chakra-ui/react";
import { useFavorites } from "../context/FavoritesContext";

const MovieCard = ({ movie: { imdbID, Title, Year, Poster, Type } }) => {
    const { favorites, addFavorite, removeFavorite } = useFavorites();

    let typeColor;
    switch (Type) {
        case "movie":
            typeColor = "#E74C3C";
            break;

        case "series":
            typeColor = "#A6378F";
            break;

        case "game":
            typeColor = "#CF445B";
            break;

        default:
            typeColor = "#CF445B";
            break;
    }

    return (
        <>
            <Card
                w={"300px"}
                minH={"500px"}
                bgColor={"#1B1B1B"}
                overflow={"hidden"}
                transition={"250ms"}
                _hover={{
                    boxShadow: "0 5px 20px #DD484A80",
                    transform: "scale(1.025)",
                }}
            >
                <Stack>
                    <Image
                        src={
                            Poster !== "N/A"
                                ? Poster
                                : "https://via.placeholder.com/400"
                        }
                        boxSize={"100%"}
                        objectFit={"cover"}
                        h={"300px"}
                        alt={`${Title} - poster`}
                    />
                    <CardBody>
                        <Stack spacing={3}>
                            <Heading as={"h2"} size={"md"}>
                                {Title}
                            </Heading>

                            <Text color={"gray.400"}>{Year}</Text>

                            <Text
                                as={"b"}
                                fontSize={"sm"}
                                bgColor={typeColor}
                                w={"fit-content"}
                                p={1.5}
                                pt={1}
                                borderRadius={"md"}
                            >
                                {Type}
                            </Text>
                            {favorites.some(
                                (item) => item.imdbID === imdbID
                            ) ? (
                                <button
                                    type="button"
                                    onClick={() => removeFavorite(imdbID)}
                                >
                                    Remover
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    onClick={() =>
                                        addFavorite({
                                            imdbID,
                                            Title,
                                            Year,
                                            Poster,
                                            Type,
                                        })
                                    }
                                >
                                    Adicionar
                                </button>
                            )}
                        </Stack>
                    </CardBody>
                </Stack>
            </Card>
        </>
    );
};

export default MovieCard;
