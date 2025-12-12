import * as React from 'react';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "/components/ui/pagination"
import Typography from '@mui/joy/Typography';

const PostsPagination = ({
                             links,
                             currentPage,
                             setCurrentPage,
                         }) => {
    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        href={links.find(l => l.label === '&laquo; Previous')?.url || '#'}
                    />
                </PaginationItem>

                {links.map((link) => {

                     if (link.label.includes('Previous') || link.label.includes('Next')) {
                        return null;
                    }

                     if (link.label === '...') {
                        return (
                            <PaginationItem key={link.label}>
                                <PaginationEllipsis />
                            </PaginationItem>
                        );
                    }

                    return (
                        <PaginationItem key={link.label}>
                            <PaginationLink
                                variant="outlined"
                                href={link.url}
                                isActive={link.active}
                            >
                                {link.label}
                            </PaginationLink>
                        </PaginationItem>
                    );
                })}

                <PaginationItem>
                    <PaginationNext
                        href={links.find(l => l.label === 'Next &raquo;')?.url || '#'}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
};

export default PostsPagination;
