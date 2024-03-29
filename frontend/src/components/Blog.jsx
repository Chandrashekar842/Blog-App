import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

export default function Blog({title, imageUrl, description, username}) {

    return (
        <Card sx={{ width: '40%', 
                    margin: 'auto', 
                    mt: 2, 
                    padding: 2, 
                    boxShadow: "5px 5px 10px #ccc", 
                    ":hover": { boxShadow: '10px 10px 20px #ccc' } }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {username}
                    </Avatar>
                }
                title={title}
                subheader="September 14, 2016"
            />
            <CardMedia
                component="img"
                height="194"
                image={imageUrl}
                alt={title}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <div style={{textAlign: 'right'}}>
                - {username}
            </div>
        </Card>
    );
}
