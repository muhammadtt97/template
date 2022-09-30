import React from "react";
// next
import NextLink from "next/link";
// mui components
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { grey } from "@mui/material/colors";
import ListItem from "@mui/material/ListItem";
import Collapse from "@mui/material/Collapse";
import { Link as MuiLink } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";
import useMediaQuery from "@mui/material/useMediaQuery";
import ListItemButton from "@mui/material/ListItemButton";

// app components
// styles and interface
import useListMenuStyle from "@src/styles/listMenu";
import { CourseListInt } from "@src/utils/interface";
import { outlineButtonStyle } from "../Library/PublicationsMenu";
// icons
import FolderListIcon from "@src/assets/images/cards/folder-item.svg";
import UnfoldMoreOutlinedIcon from "@mui/icons-material/UnfoldMoreOutlined";
//

export const MenuList = ({
  coursesListData,
}: {
  coursesListData: CourseListInt;
}) => {
  const listMenuStyle = useListMenuStyle();

  return (
    <List disablePadding className={listMenuStyle.listMenuRoot}>
      {coursesListData.courses
        .filter((course) => course.type === "FOLDER")
        .map((course, index) => (
          <ListItem key={`${index}-course-folder`} disablePadding>
            <NextLink href={`/library?folderId=${course.id}`} passHref>
              <ListItemButton component={MuiLink}>
                <ListItemText primary={course.name} />
              </ListItemButton>
            </NextLink>
          </ListItem>
        ))}
    </List>
  );
};

const CoursesMenu = ({ pageData }: Record<string, any>) => {
  const theme = useTheme();
  const [collapse, setCollapse] = React.useState(false);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  //
  const coursesListData = pageData.courseList as CourseListInt;
  //
  const handleChange = () => {
    setCollapse((prev) => !prev);
  };
  //
  if (
    coursesListData.courses.filter((course) => course.type === "FOLDER")
      .length === 0
  ) {
    return (
      <Box top={32} position="sticky">
        {isMatch ? (
          <></>
        ) : (
          <>
            <Typography mb={8} variant="h5">
              Categories
            </Typography>
            <FolderListIcon />
            <Typography paragraph>No category available</Typography>
          </>
        )}
      </Box>
    );
  }
  return (
    <Box top={32} position="sticky">
      {isMatch ? (
        <Button
          onClick={handleChange}
          color="secondary"
          variant="outlined"
          sx={outlineButtonStyle}
        >
          Categories
          <UnfoldMoreOutlinedIcon htmlColor={grey[400]} />
        </Button>
      ) : (
        <Typography mb={2} variant="h5">
          Categories
        </Typography>
      )}
      {isMatch ? (
        <Collapse in={collapse}>
          <Paper
            elevation={0}
            variant="outlined"
            sx={{ mt: 2, p: 2, bgcolor: grey[50] }}
          >
            <MenuList coursesListData={coursesListData} />
          </Paper>
        </Collapse>
      ) : (
        <MenuList coursesListData={coursesListData} />
      )}
    </Box>
  );
};

export default CoursesMenu;
